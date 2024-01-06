import fs from 'fs/promises';

export async function getAllApplications() {
  const rawFileContent = await fs.readFile('applications.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const existingApplications = data.applications ?? [];
  return existingApplications;
}

export function storeApplication(application) {
  return fs.writeFile('applications.json', JSON.stringify({ applications: application || [] }));
}