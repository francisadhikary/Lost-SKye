class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer {
                    background-color: #111;
                    color: #777;
                }
                
                .footer-links a:hover {
                    color: #e53e3e;
                }
                
                .social-icon {
                    transition: all 0.3s ease;
                }
                
                .social-icon:hover {
                    color: #e53e3e;
                    transform: translateY(-3px);
                }
            </style>
            <footer class="footer py-12 px-4">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 class="text-white text-lg font-bold mb-4">GAMES</h3>
                            <ul class="space-y-2 footer-links">
                                <li><a href="#" class="hover:text-red-600">Red Dead Redemption 2</a></li>
                                <li><a href="#" class="hover:text-red-600">Grand Theft Auto V</a></li>
                                <li><a href="#" class="hover:text-red-600">Grand Theft Auto Online</a></li>
                                <li><a href="#" class="hover:text-red-600">Max Payne 3</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-white text-lg font-bold mb-4">SOCIAL CLUB</h3>
                            <ul class="space-y-2 footer-links">
                                <li><a href="#" class="hover:text-red-600">Home</a></li>
                                <li><a href="#" class="hover:text-red-600">Profile</a></li>
                                <li><a href="#" class="hover:text-red-600">Crews</a></li>
                                <li><a href="#" class="hover:text-red-600">Events</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-white text-lg font-bold mb-4">SUPPORT</h3>
                            <ul class="space-y-2 footer-links">
                                <li><a href="#" class="hover:text-red-600">Support Home</a></li>
                                <li><a href="#" class="hover:text-red-600">Contact Us</a></li>
                                <li><a href="#" class="hover:text-red-600">FAQs</a></li>
                                <li><a href="#" class="hover:text-red-600">Policies</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-white text-lg font-bold mb-4">COMPANY</h3>
                            <ul class="space-y-2 footer-links">
                                <li><a href="#" class="hover:text-red-600">About</a></li>
                                <li><a href="#" class="hover:text-red-600">Careers</a></li>
                                <li><a href="#" class="hover:text-red-600">Press</a></li>
                                <li><a href="#" class="hover:text-red-600">Corporate</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div class="flex space-x-4 mb-4 md:mb-0">
                            <a href="#" class="social-icon">
                                <i data-feather="facebook" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i data-feather="twitter" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i data-feather="instagram" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i data-feather="youtube" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i data-feather="twitch" class="w-5 h-5"></i>
                            </a>
                        </div>
                        <div class="text-sm">
                            <p>&copy; 2023 Rockstar Games. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);