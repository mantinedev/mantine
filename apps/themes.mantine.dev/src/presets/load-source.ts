export interface PresetSource {
  imports: Record<string, string[]>;
  helpers: string;
  components: string | null;
  variantColorResolver: string | null;
  css: string | null;
}

export async function loadPresetSource(presetId: string): Promise<PresetSource | null> {
  try {
    const module = await import(`./sources/${presetId}.json`);
    return module.default as PresetSource;
  } catch {
    return null;
  }
}
