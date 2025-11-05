export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2025 Deltrons. All rights reserved.</p>
          <div className="flex gap-6">
            <a 
              href="#terms" 
              className="text-sm hover:text-white/80 transition-colors"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </a>
            <a 
              href="#privacy" 
              className="text-sm hover:text-white/80 transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
