import dynamic from 'next/dynamic';

// Dynamic import of SignInButton from Clerk
const SignInButton = dynamic(() => import('@clerk/clerk-react').then((mod) => mod.SignInButton), {
  ssr: false, // Disable server-side rendering
});

export default function SignInButtonComponent() {
  return (
    <button className="flex items-center px-3 py-2 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 mx-2">
      <SignInButton>
     Sign In
      </SignInButton>
    </button>
  );
}
