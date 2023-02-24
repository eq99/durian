import { readTextFile, writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';

export function defineConfig() {
  return {
    dataFile: "data.json",
    baseDir: BaseDirectory.AppLocalData,
  }
}

export async function readData() {
  const config = defineConfig();
  return await readTextFile(config.dataFile, { dir: config.baseDir });
}


export async function saveData(contents: string) {
  const config = defineConfig();
  await writeTextFile({ path: config.dataFile, contents }, { dir: config.baseDir });
}


