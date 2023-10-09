import puppeteer, { Browser } from 'puppeteer';

export class ConnectionManager {
  private availableBrowsers: Browser[] = [];
  constructor() {
    this.initializeBrowsers();
  }

  private async initializeBrowsers() {
      const browser = await puppeteer.launch();
      this.availableBrowsers.push(browser);
  }
  public async createBrowser(): Promise<void> {
    const browser = await puppeteer.launch();
    this.availableBrowsers.push(browser);
  }

  public async getBrowser(): Promise<Browser> {
    console.log( " availableBrowswers : ", this.availableBrowsers )
    if (this.availableBrowsers.length === 0) {
      await this.createBrowser();
      await this.createBrowser();
      await this.createBrowser();
    }
    return this.availableBrowsers.pop()!;
  }

  public releaseBrowser(browser: Browser): void {
    this.availableBrowsers.push(browser);
  }
}

;

