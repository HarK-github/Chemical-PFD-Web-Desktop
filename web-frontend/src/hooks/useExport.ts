import { useState, useCallback } from 'react';
import Konva from 'konva';
import { ExportOptions, ExportFormat } from '@/components/Canvas/types';
import {
  exportDiagram as exportDiagramCore,
  downloadBlob,
} from '@/utils/exports'; // Updated import path
import { CanvasItem } from '@/components/Canvas/types';

export function useExport() {
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);

  const generateFilename = (format: ExportFormat): string => {
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
    return `diagram-${timestamp}.${format}`;
  };

  const exportDiagram = useCallback(
    async (
      stage: Konva.Stage | null,
      options: ExportOptions,
      items: CanvasItem[]
    ): Promise<void> => {
      if (!stage) {
        setExportError('Stage not found');
        return;
      }

      if (!items || items.length === 0) {
        setExportError('No items to export');
        return;
      }

      setIsExporting(true);
      setExportError(null);

      try {
        const filename = generateFilename(options.format);

        // Use the new exportDiagram function from Canvas/export
        const result = await exportDiagramCore(stage, items, options);

        // Download the result
        downloadBlob(result as Blob, filename);

      } catch (error) {
        console.error('Export failed:', error);
        setExportError(
          error instanceof Error ? error.message : 'Export failed. Please try again.'
        );
        throw error; // Re-throw so the caller can handle it too
      } finally {
        setIsExporting(false);
      }
    },
    []
  );

  return {
    exportDiagram,
    isExporting,
    exportError,
    clearError: () => setExportError(null),
  };
}