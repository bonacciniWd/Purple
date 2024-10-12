import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-8 bg-tantra-dark text-center text-tantra-light">

      <div className="mt-4 text-sm">
        
        <div className="mt-4">
        <Image src="/logo.png" alt="Logo Daiane Grison" className="mx-auto " width={140} 
          height={140}/>
      </div>

        <p>Siga nas redes sociais</p>
        <div className="mt-2 space-x-4">
          <a href="https://chat.whatsapp.com/KS5FcGgF7pOLkZLLP9obio" className="hover:underline" target="_blank" rel="noopener noreferrer">Grupo do Whatsapp</a>
          <a href="https://www.instagram.com/daianegrison/" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      <div className="space-x-4 text-sm mx-4 my-4">
        <Link href="/terms" className="hover:underline">Termos de Uso</Link>
        <Link href="/privacy" className="hover:underline">Política de Privacidade</Link>
        <Link href="/faq" className="hover:underline">Perguntas Frequentes</Link>
      </div>

      {/* Powered by VRZ-Studio */}
      <div className="mt-4">
        <p className="text-sm text-tantra-light2">
          Powered by{' '}
          <Link href="https://vrz-studio.tech" className="underline" target="_blank" rel="noopener noreferrer">
            VRZ-Studio 2024 ®
          </Link>
        </p>
      </div>
    </footer>
  );
}
