export function IconDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <symbol id="ic-chili" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3c1.5 1 1 2.5 0 3M9 6c4-1 10 1 10 7 0 4.5-4 8-8.5 8C6 21 3 18 3 14c0-3 2-5 6-8Z" />
      </symbol>
      <symbol id="ic-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20c8 0 16-4 16-16C10 4 4 12 4 20Z" />
        <path d="M4 20c3-5 7-9 12-12" />
      </symbol>
      <symbol id="ic-star" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7-5.4-4.7 7.1-.6L12 2Z" />
      </symbol>
      <symbol id="ic-snow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
        <path d="M12 2v20M4.5 6l15 12M19.5 6l-15 12M2 12h20M6 4l1.2 2.8L10 8M18 4l-1.2 2.8L14 8M6 20l1.2-2.8L10 16M18 20l-1.2-2.8L14 16" />
      </symbol>
      <symbol id="ic-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </symbol>
      <symbol id="ic-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.4" />
      </symbol>
      <symbol id="ic-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5c0 8.5 6.5 15 15 15l3-4-6-3-2 2c-2.4-1.1-4.9-3.6-6-6l2-2-3-6-4 0Z" />
      </symbol>
      <symbol id="ic-seats" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6M2 19h20M6 9V5h12v4" />
      </symbol>
      <symbol id="ic-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v6M12 7.5v.01" />
      </symbol>
      <symbol id="ic-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </symbol>
      <symbol id="ic-ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.7" r="1" />
      </symbol>
      <symbol id="ic-fb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M14 21v-8h3l.5-4H14V6.5A1.5 1.5 0 0 1 15.5 5H17V1.3S15.7 1 14.3 1C11.5 1 10 2.7 10 5.4V9H7v4h3v8" />
      </symbol>
      <symbol id="ic-tk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46M14 3c.4 2.6 2.3 4.4 5 4.7" />
      </symbol>
    </svg>
  )
}

export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg className={className}>
      <use href={`#${name}`} />
    </svg>
  )
}
