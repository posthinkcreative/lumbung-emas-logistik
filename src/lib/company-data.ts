import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'company-info.json');

export interface CompanyInfo {
  aboutUs: string;
  servicesOverview: string;
}

const defaultCompanyInfo: CompanyInfo = {
  aboutUs: "Selamat datang di Lumbung Emas Logistik! Informasi profil perusahaan Anda akan muncul di sini. Silakan berikan kontennya kepada saya.",
  servicesOverview: "Rincian layanan Anda akan ditampilkan di sini. Silakan berikan kontennya kepada saya.",
};

export async function getCompanyInfo(): Promise<CompanyInfo> {
  try {
    await fs.access(dataFilePath);
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    const data = JSON.parse(fileContent);
    // Basic validation to ensure keys exist
    if (typeof data.aboutUs === 'string' && typeof data.servicesOverview === 'string') {
      return data;
    }
    return defaultCompanyInfo;
  } catch (error) {
    console.error("Failed to read company info:", error);
    // Return default if file doesn't exist or is invalid
    return defaultCompanyInfo;
  }
}
