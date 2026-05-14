# Propozycje Rozwoju Projektu Archekon

Lista zadań i pomysłów na dalszy rozwój strony internetowej pracowni, ułożona według priorytetów.

## 1. Uruchomienie formularza kontaktowego (Priorytet)
Obecnie formularz w sekcji "Kontakt" nie wysyła wiadomości (ma zablokowaną domyślną akcję).
*   **Rozwiązanie:** Podpięcie darmowego narzędzia typu **Formspree** lub **EmailJS**. Umożliwi to wysyłanie formularza bezpośrednio na skrzynkę `biuro@archekon.pl` bez konieczności stawiania własnego backendu/serwera.

## 2. Rzeczywista Galeria z Lightboxem
W galerii używane są tymczasowe zdjęcia (placeholdery z Unsplash).
*   **Rozwiązanie:** Podmiana na prawdziwe zdjęcia z wykopalisk i realizacji. Dodanie biblioteki **Lightbox** (np. `yet-another-react-lightbox`), dzięki czemu po kliknięciu zdjęcie powiększy się na cały ekran z opcją przewijania i przybliżania.

## 3. Interaktywna Mapa w sekcji Kontakt
Adres siedziby podany jest jedynie w formie tekstowej.
*   **Rozwiązanie:** Osadzenie interaktywnej mapy (Google Maps iframe) w okolicach formularza, co ułatwi klientom szybkie wyznaczenie trasy dojazdu.

## 4. Optymalizacja SEO (Widoczność w Google) - W REALIZACJI
Aplikacje typu SPA wymagają dodatkowego wsparcia dla SEO.
*   **Rozwiązanie:** Instalacja i konfiguracja `react-helmet-async`, aby móc dynamicznie (lub globalnie) zarządzać tagami `<title>`, `<meta description>`, oraz tagami OpenGraph (lepszy wygląd linków np. na Facebooku/LinkedIn).

## 5. RODO / Baner Cookies i Polityka Prywatności - W REALIZACJI
Wymóg prawny na terenie UE.
*   **Rozwiązanie:** Dodanie dyskretnego banera z informacją o ciasteczkach (z opcją "Akceptuję") oraz, docelowo, podstrony z Polityką Prywatności.

## 6. Ewentualny system CMS (Zarządzanie treścią) - Przyszłościowo
Dla ułatwienia samodzielnej aktualizacji tekstów i zdjęć w przyszłości.
*   **Rozwiązanie:** Integracja z darmowym, prostym w obsłudze Headless CMS (np. Netlify CMS, Sanity, Strapi), aby edycja treści nie wymagała modyfikowania kodu źródłowego.
