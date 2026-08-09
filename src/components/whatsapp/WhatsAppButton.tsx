import { contact } from "@/config/contact";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${contact.whatsapp}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.25c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.66 1.83-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z" />
        <path d="M16 3.2A12.8 12.8 0 0 0 5.07 22.67L3.2 28.8l6.29-1.85A12.8 12.8 0 1 0 16 3.2zm0 23.3c-2.02 0-3.99-.54-5.72-1.56l-.41-.24-3.73 1.1 1.11-3.64-.27-.42A10.6 10.6 0 1 1 16 26.5z" />
      </svg>

      <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-[var(--color-accent)]" />
    </a>
  );
}