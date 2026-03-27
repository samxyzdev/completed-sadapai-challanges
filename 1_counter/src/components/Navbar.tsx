import logo from "../assets/logo.svg";

export function Navbar() {
  return (
    <nav className="relative flex justify-between items-center px-4 py-4 shadow">
      <div className="flex items-center gap-4">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <div className="w-10 h-10">
          <img src={logo} alt="image" />
        </div>
      </div>
      <h1 className="text-3xl absolute left-1/2 -translate-x-1/2 font-bold">
        Counter
      </h1>
      <div className="flex items-center gap-4">
        <button className="w-8 h-8 rounded-full border-2 text-center">?</button>
        <img
          src="data:image/svg+xml, %3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-code-xml'%3e%3cpath%20d='m18%2016%204-4-4-4'/%3e%3cpath%20d='m6%208-4%204%204%204'/%3e%3cpath%20d='m14.5%204-5%2016'/%3e%3c/svg%3e"
          alt=""
        />
        <img
          src="https://sadanandpai.github.io/frontend-mini-challenges/react/assets/github-KMwwOUMo.svg"
          alt=""
        />
      </div>
    </nav>
  );
}
