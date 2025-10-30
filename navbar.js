class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    background-color: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }
                
                .navbar:hover {
                    background-color: rgba(0, 0, 0, 0.9);
                }
                
                .nav-link {
                    position: relative;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background-color: #e53e3e;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .dropdown:hover .dropdown-menu {
                    display: block;
                }
            </style>
            <nav class="navbar fixed w-full z-50 py-4 px-6">
                <div class="max-w-7xl mx-auto flex justify-between items-center">
                    <div class="flex items-center space-x-8">
                        <a href="/" class="text-white font-bold text-xl">
                            <span class="text-red-600">ROCKSTAR</span> GAMES
                        </a>
                        <div class="hidden md:flex space-x-6">
                            <a href="#" class="nav-link text-white hover:text-red-600">GAMES</a>
                            <a href="#" class="nav-link text-white hover:text-red-600">NEWS</a>
                            <a href="#" class="nav-link text-white hover:text-red-600">VIDEOS</a>
                            <div class="dropdown relative">
                                <button class="nav-link text-white hover:text-red-600 flex items-center">
                                    MORE <i data-feather="chevron-down" class="ml-1 w-4 h-4"></i>
                                </button>
                                <div class="dropdown-menu absolute hidden mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-10">
                                    <a href="#" class="block px-4 py-2 text-white hover:bg-gray-800">Social Club</a>
                                    <a href="#" class="block px-4 py-2 text-white hover:bg-gray-800">Merchandise</a>
                                    <a href="#" class="block px-4 py-2 text-white hover:bg-gray-800">Support</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="text-white hover:text-red-600">
                            <i data-feather="search" class="w-5 h-5"></i>
                        </button>
                        <button class="text-white hover:text-red-600">
                            <i data-feather="user" class="w-5 h-5"></i>
                        </button>
                        <button class="md:hidden text-white hover:text-red-600">
                            <i data-feather="menu" class="w-6 h-6"></i>
                        </button>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);