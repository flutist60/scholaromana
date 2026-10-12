export type Lang = 'en' | 'it';

export const languages: Lang[] = ['en', 'it'];

/** Builds a localized path: en has no prefix, it lives under /it */
export function localize(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean;
  return clean === '/' ? '/it/' : `/it${clean}`;
}

/** Strips the /it prefix to get the language-neutral path */
export function neutralPath(pathname: string): string {
  const p = pathname.replace(/^\/it(?=\/|$)/, '') || '/';
  return p.length > 1 ? p.replace(/\/$/, '') : p;
}

export const contacts = {
  phone: '(+39) 320 567 5104',
  phoneHref: 'tel:+393205675104',
  whatsapp: 'https://wa.me/393205675104',
  email: 'scholaromana.ensemble@gmail.com',
};

export const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/scholaromanaensemble/', icon: 'instagram' },
  { name: 'Facebook', href: 'https://www.facebook.com/scholaromanaensemble/', icon: 'facebook' },
  { name: 'X', href: 'https://x.com/tw_scholaromana', icon: 'x' },
  { name: 'YouTube', href: 'https://www.youtube.com/@scholaromanaensemble', icon: 'youtube' },
] as const;

type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

export const nav: Record<Lang, NavItem[]> = {
  en: [
    { label: 'Home', href: '/' },
    {
      label: 'Bio',
      href: '/#bio',
      children: [
        { label: 'Schola Romana Ensemble', href: '/schola-romana-ensemble' },
        { label: 'Stefano Sabene', href: '/stefano-sabene' },
      ],
    },
    {
      label: 'Early music',
      href: '/#early-music',
      children: [
        { label: 'Canticum Canticorum', href: '/canticum-canticorum' },
        { label: 'Vox Aeternitatis', href: '/vox-aeternitatis' },
        { label: 'Grant me the gift of fire', href: '/grant-me-the-gift-of-fire' },
        { label: 'Passio - Christus', href: '/passio-christus' },
      ],
    },
    {
      label: 'Contemporary music',
      href: '/#contemporary-music',
      children: [
        { label: 'Sacralia', href: '/sacralia' },
        { label: 'Sopra la notte', href: '/sopra-la-notte' },
      ],
    },
    {
      label: 'Media',
      href: '/media',
      children: [
        { label: 'Audio', href: '/media#audio' },
        { label: 'Video', href: '/media#video' },
        { label: 'Photo', href: '/media#photo' },
      ],
    },
    { label: 'Press', href: '/#press', children: [{ label: 'Reviews', href: '/reviews' }] },
    { label: 'News', href: '/#news' },
    { label: 'Contacts', href: '/#contacts' },
    { label: 'Blog', href: '/blog' },
  ],
  it: [
    { label: 'Home', href: '/' },
    {
      label: 'Bio',
      href: '/#bio',
      children: [
        { label: 'Schola Romana Ensemble', href: '/schola-romana-ensemble' },
        { label: 'Stefano Sabene', href: '/stefano-sabene' },
      ],
    },
    {
      label: 'Musica antica',
      href: '/#early-music',
      children: [
        { label: 'Canticum Canticorum', href: '/canticum-canticorum' },
        { label: 'Vox Aeternitatis', href: '/vox-aeternitatis' },
        { label: 'Dammi il dono del fuoco', href: '/grant-me-the-gift-of-fire' },
        { label: 'Passio - Christus', href: '/passio-christus' },
      ],
    },
    {
      label: 'Musica contemporanea',
      href: '/#contemporary-music',
      children: [
        { label: 'Sacralia', href: '/sacralia' },
        { label: 'Sopra la notte', href: '/sopra-la-notte' },
      ],
    },
    {
      label: 'Media',
      href: '/media',
      children: [
        { label: 'Audio', href: '/media#audio' },
        { label: 'Video', href: '/media#video' },
        { label: 'Foto', href: '/media#photo' },
      ],
    },
    { label: 'Stampa', href: '/#press', children: [{ label: 'Recensioni', href: '/reviews' }] },
    { label: 'News', href: '/#news' },
    { label: 'Contatti', href: '/#contacts' },
    { label: 'Blog', href: '/blog' },
  ],
};

export const ui = {
  en: {
    footer: 'Schola Romana Ensemble | Early and contemporary music © 2025',
    menu: 'Menu',
    close: 'Close',
    gallery: 'Gallery',
    video: 'Video',
    allPosts: 'All Posts',
    readMore: 'Read more',
    minRead: 'min read',
    seeAll: 'See All',
    recentPosts: 'Recent Posts',
    noPosts: 'Posts Coming Soon',
    noPostsHint: 'Explore other categories in this blog or check back later.',
    profile: 'Profile',
    events: 'Events',
    noEvents: 'No upcoming events at the moment.',
    browseEvents: 'Browse events',
    form: {
      email: 'Your email',
      message: 'Message',
      send: 'Send',
      thanks: 'Thanks for submitting!',
      error: 'Something went wrong. Please write to us by email.',
    },
    phone: 'Phone / Whatsapp',
    email: 'Email',
    social: 'Social Media',
    langName: 'English',
  },
  it: {
    footer: 'Schola Romana Ensemble | Musica antica e contemporanea © 2025',
    menu: 'Menu',
    close: 'Chiudi',
    gallery: 'Galleria',
    video: 'Video',
    allPosts: 'Tutti i post',
    readMore: 'Leggi tutto',
    minRead: 'min di lettura',
    seeAll: 'Mostra tutti',
    recentPosts: 'Post recenti',
    noPosts: 'Presto nuovi post',
    noPostsHint: 'Esplora le altre categorie del blog o torna più tardi.',
    profile: 'Profilo',
    events: 'Eventi',
    noEvents: 'Al momento non ci sono eventi in programma.',
    browseEvents: 'Sfoglia eventi',
    form: {
      email: 'La tua email',
      message: 'Messaggio',
      send: 'Invia',
      thanks: 'Grazie per averci scritto!',
      error: 'Qualcosa non ha funzionato. Scrivici via email.',
    },
    phone: 'Telefono / Whatsapp',
    email: 'Email',
    social: 'Social Media',
    langName: 'Italiano',
  },
} as const;

/**
 * Contact form endpoint. Leave empty to fall back to a mailto: link.
 * To receive messages by email for free, create an access key at https://web3forms.com
 * (it is sent to scholaromana.ensemble@gmail.com) and paste it below.
 */
export const web3formsKey = '';
