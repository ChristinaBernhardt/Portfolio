import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: { [key: string]: { [key: string]: string } } = {
    en: {
      aboutMe: 'About me',
      introduction: 'I am a Frontend Developer from Nuremberg, Germany. I help designers and companies to bring their ideas to real life. Creativity and logical thinking are skills that I have developed to connect ideas into quality products.',
      contactMe: 'If you think I`d be a good match for your projects, contact me!',
      basedIn: 'Based in Nuremberg',
      remoteWork: 'Open to work remote',
      letsTalk: "Let's talk",
    },
    de: {
      aboutMe: 'Über mich',
      introduction: 'Ich bin ein Frontend-Entwickler aus Nürnberg, Deutschland. Ich helfe Designern und Unternehmen, ihre Ideen in die Realität umzusetzen. Kreativität und logisches Denken sind Fähigkeiten, die ich entwickelt habe, um Ideen in Qualitätsprodukte zu verwandeln.',
      contactMe: 'Wenn Sie denken, dass ich gut zu Ihrem Projekt passe, kontaktieren Sie mich!',
      basedIn: 'Ansässig in Nürnberg',
      remoteWork: 'Bereit für Remote-Arbeit',
      letsTalk: 'Lass uns reden',
    },
  };

  private currentLang = 'en';

  setLanguage(lang: string): void {
    if (this.translations[lang]) {
      this.currentLang = lang;
    }
  }

  translate(key: string): string {
    return this.translations[this.currentLang][key] || key;
  }
}
