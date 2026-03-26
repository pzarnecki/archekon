# Pracownia Archeologiczno-Konserwatorska "Archekon" – Nowoczesna Strona Internetowa

Witaj! Niniejszy dokument opisuje nową wersję strony internetowej pracowni **Archekon**. Projekt został przebudowany od podstaw, aby sprostać najwyższym współczesnym standardom projektowania webowego. Strona łączy w sobie elegancję, płynność działania oraz nowoczesne technologie, które zapewniają nie tylko świetny wygląd, ale również wysoką wydajność.

---

## 🚀 Zastosowane Technologie

Strona została zbudowana w oparciu o najnowszy, profesjonalny stos technologiczny (tzw. "tech stack"), który stawia na szybkość, bezpieczeństwo i niezawodność:

### 1. **React 19** (Silnik aplikacji)
Najnowsza wersja najpopularniejszej na świecie biblioteki do budowy interfejsów użytkownika (stworzonej przez Meta/Facebook).
* **Co to daje klientowi?** Niesamowita szybkość działania. Zamiast przeładowywać całą stronę przy każdym kliknięciu, React płynnie podmienia tylko te fragmenty treści, które uległy zmianie. Daje to wrażenie korzystania z nowoczesnej aplikacji (tzw. Single Page Application), a nie zwykłej, powolnej strony WWW. Gwarantuje też łatwość przyszłej rozbudowy o nowe funkcje.

### 2. **Vite** (Narzędzie budujące)
Superszybki "kompilator" kodu nowej generacji.
* **Co to daje klientowi?** Błyskawiczne ładowanie strony. Vite optymalizuje wszystkie obrazy, skrypty i pliki stylów tak, aby ważyły jak najmniej i ładowały się błyskawicznie na urządzeniach mobilnych i na słabszych połączeniach internetowych.

### 3. **Three.js & Vanta.js** (Efekty 3D i interakcja)
Zaawansowane biblioteki do renderowania grafiki 3D (WebGL) bezpośrednio w przeglądarce, bez potrzeby instalowania jakichkolwiek wtyczek.
* **Co to daje klientowi?** Efekt "WOW". Strona wyróżnia się na tle konkurencji dzięki subtelnemu, interaktywnemu tłu, które reaguje na ruchy myszki użytkownika. Buduje to wizerunek nowoczesnej, profesjonalnej i dbającej o detale firmy.

### 4. **Framer Motion** (Animacje)
Profesjonalna biblioteka do tworzenia płynnych, "kinematograficznych" animacji wprowadzających (np. elementy pojawiające się podczas przewijania ekranu).
* **Co to daje klientowi?** Treść nie pojawia się nagle, ale "wypływa" w odpowiednim momencie, kierując wzrok użytkownika na najważniejsze informacje i ofertę. Zwiększa to zaangażowanie i czas spędzony na stronie.

### 5. **Lucide React** (Ikonografia)
Nowoczesny, lekki i spójny wizualnie system ikon.
* **Co to daje klientowi?** Spójny i elegancki wygląd detali. Ikony ładują się natychmiast, zachowując doskonałą ostrość na ekranach o wysokiej rozdzielczości (np. smartfony, ekrany Retina marki Apple).

---

## 📈 Pozycjonowanie (SEO) i Optymalizacja

Technologia to nie wszystko. Strona została zoptymalizowana tak, aby wspierać pozycjonowanie w wyszukiwarkach (np. Google):

1. **Prędkość Ładowania (PageSpeed):** Google w swoich algorytmach bardzo mocno promuje strony, które ładują się szybko. Dzięki zastosowaniu Vite i zoptymalizowanego Reacta, strona natychmiast serwuje kluczowe treści, co z punktu widzenia botów Google jest gigantycznym plusem.
2. **Responsywność (Mobile-First):** Obecnie Google korzysta z indeksowania "Mobile First" – ocenia stronę na podstawie jej wersji mobilnej. Nowy projekt Archekon jest perfekcyjnie dostosowany do wyświetlania na smartfonach i tabletach (wszystkie przyciski są odpowiednio duże, czcionki czytelne, a animacje zoptymalizowane pod telefony).
3. **Nowoczesna struktura:** Aplikacja generuje zoptymalizowany kod, który jest łatwiejszy do przyswojenia przez roboty indeksujące, wspierając techniczne SEO.
4. **Bezpieczeństwo i stabilność:** Brak przestarzałych wtyczek (jak to często bywa w CMSach typu WordPress) oznacza brak luk bezpieczeństwa, co również jest czynnikiem rankingowym dla wyszukiwarek.

---

## 🛠️ Instrukcja dla Administratora / Programisty

### Aktualizacja strony (Deploy)
Aby wgrać nową wersję strony na produkcję (GitHub Pages) po wprowadzeniu jakichkolwiek zmian w kodzie lub tekstach, wystarczy uruchomić w terminalu jedną komendę:

```bash
npm run deploy
```

Komenda ta automatycznie:
1. Zbuduje zoptymalizowaną do maksimum wersję produkcyjną (`npm run build`).
2. Wyśle pliki bezpośrednio na serwery GitHub Pages (`gh-pages -d dist`).
3. Po kilku minutach zmiany będą widoczne pod adresem publicznym.

*Uwaga: Pamiętaj, aby oprócz `npm run deploy`, wykonywać również regularne commity i pushować kod źródłowy na główną gałąź (`main`) w repozytorium GitHub.*

### Uruchomienie lokalne do testów
```bash
npm install # Instalacja zależności (tylko za pierwszym razem)
npm run dev # Odpalenie serwera deweloperskiego (oglądanie zmian na żywo)
```
