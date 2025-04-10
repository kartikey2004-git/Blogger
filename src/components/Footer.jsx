const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-8 mb-8 lg:grid-cols-6 md:grid-cols-2">
        <div className="md:max-w-md lg:col-span-2 mr-10">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
              Bloggerrrrr
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm">
              This blog project is built using React and Firebase, offering a
              dynamic platform for users to create, edit, and manage posts.
            </p>
            <p className="mt-4 text-sm ">
              Users can register or log in to the platform, providing a
              personalized experience for managing their posts.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-24  row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide">Category</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  World
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  References
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide ">Business</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Web
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  eCommerce
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Interest
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide ">Apples</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Brochure
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Nonprofit
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Educational
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide ">Cherry</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Info
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Wiki
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Forum
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm">
          © Copyright 2025 Lorem Inc. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            href="https://github.com/kartikey2004-git"
            className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M12 0.297C5.372 0.297 0 5.674 0 12.297c0 5.292 3.438 9.778 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.041-.017-2.043-3.338.726-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.204.084 1.838 1.235 1.838 1.235 1.07 1.834 2.805 1.304 3.49.997.108-.774.418-1.305.76-1.606-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.123-.305-.535-1.527.116-3.183 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.005.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.656.241 2.878.119 3.183.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.623-5.476 5.921.43.371.814 1.104.814 2.223 0 1.606-.015 2.902-.015 3.296 0 .32.217.694.824.576C20.565 22.071 24 17.585 24 12.297c0-6.623-5.372-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/_kartikey2004/"
            className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337"
            className=" transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22.23 0H1.77C0.79 0 0 0.77 0 1.72v20.56C0 23.23 0.79 24 1.77 24h20.46c0.98 0 1.77-0.77 1.77-1.72V1.72C24 0.77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.54C4.16 7.54 3.2 6.58 3.2 5.4s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zM20.45 20.45h-3.56v-5.73c0-1.37-0.02-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03v5.83h-3.56V9h3.42v1.57h0.05c0.48-0.91 1.65-1.88 3.4-1.88 3.63 0 4.3 2.39 4.3 5.49v6.27z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;