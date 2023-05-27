<template>
    <div>
        <header class="flex items-center justify-between bg-[#191825] px-[80px] py-[20px] text-white">
            <h1 class="text-3xl font-bold text-[#E384FF] drop-shadow-md">PojoKoding</h1>
            <div class="flex items-center gap-6">
                <div class="flex">
                    <a href="#" class="px-4">Daftar Kursus</a>
                    <a href="#" class="px-4">Hubungi Kami</a>
                </div>
                <div class="h-6 w-px bg-[#E384FF]"></div>
                <div class="flex items-center gap-2">
                    <button class="px-4">Masuk</button>
                    <button class="rounded-md bg-[#E384FF] px-4 py-1">Daftar</button>
                </div>
            </div>
        </header>
        <div class="bg-[#191825] px-[80px] text-white">
            <main class="flex w-7/12 flex-col gap-6">
                <div class="flex flex-col">
                    <h2 class="text-3xl font-medium">Python for Data Science and Machine Learning Bootcamp</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                    <p class="text-sm text-second">Dibuat oleh PojoKoding</p>
                </div>
                <div class="flex justify-center border border-second py-3">
                    <div class="">
                        <h3 class="text-xl">Yang akan anda pelajari:</h3>
                        <div class="pt-1">
                            <ul style="list-style-type: '✔ ';" class="grid ceklis-icon grid-cols-2 gap-x-36 gap-y-0.5 px-4">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <h2 class="text-2xl">Materi Kursus</h2>
                    <p>27 sections • 165 lectures • 24h 54m total length</p>

                    <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-background text-white">
                        <h2 id="accordion-color-heading-1">
                            <button type="button"
                                class="flex items-center justify-between w-full p-5 font-medium text-left text-second border border-b-0 border-second"
                                data-accordion-target="#accordion-color-body-1" aria-expanded="true"
                                aria-controls="accordion-color-body-1">
                                <span>Pengantar</span>
                                <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
                            <ul class="p-5 border border-b-0 border-second">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <h2 id="accordion-color-heading-2">
                            <button type="button"
                                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-second"
                                data-accordion-target="#accordion-color-body-2" aria-expanded="false"
                                aria-controls="accordion-color-body-2">
                                <span>Pengantar</span>
                                <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
                            <ul class="p-5 border border-b-0 border-second">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <h2 id="accordion-color-heading-3">
                            <button type="button"
                                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-second "
                                data-accordion-target="#accordion-color-body-3" aria-expanded="false"
                                aria-controls="accordion-color-body-3">
                                <span>Pengantar</span>
                                <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
                            <ul class="p-5 border border-b-0 border-second">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <h2 class="text-2xl">Deskripsi</h2>
                    <div class="flex flex-col gap-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan tortor sit amet
                            accumsan accumsan. Proin in rhoncus ex. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Etiam pulvinar mi vel vestibulum dictum. Sed
                            luctus erat vitae augue ultrices efficitur. Suspendisse vestibulum metus non feugiat
                            porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin massa magna,
                            commodo lobortis metus ac, imperdiet commodo nisl. Fusce imperdiet tellus et lacus auctor
                            accumsan. Aliquam sed dictum dolor. Pellentesque eu nisi euismod, accumsan lorem a, accumsan
                            ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan tortor sit amet
                            accumsan accumsan. Proin in rhoncus ex. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Etiam pulvinar mi vel vestibulum dictum. Sed
                            luctus erat vitae augue ultrices efficitur. Suspendisse vestibulum metus non feugiat
                            porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin massa magna,
                            commodo lobortis metus ac, imperdiet commodo nisl. Fusce imperdiet tellus et lacus auctor
                            accumsan. Aliquam sed dictum dolor. Pellentesque eu nisi euismod, accumsan lorem a, accumsan
                            ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos.</p>
                        <img src="#" alt="gambar" class="border border-second h-60">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan tortor sit amet
                            accumsan accumsan. Proin in rhoncus ex. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Etiam pulvinar mi vel vestibulum dictum. Sed
                            luctus erat vitae augue ultrices efficitur. Suspendisse vestibulum metus non feugiat
                            porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin massa magna,
                            commodo lobortis metus ac, imperdiet commodo nisl. Fusce imperdiet tellus et lacus auctor
                            accumsan. Aliquam sed dictum dolor. Pellentesque eu nisi euismod, accumsan lorem a, accumsan
                            ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan tortor sit amet
                            accumsan accumsan. Proin in rhoncus ex. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Etiam pulvinar mi vel vestibulum dictum. Sed
                            luctus erat vitae augue ultrices efficitur. Suspendisse vestibulum metus non feugiat
                            porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin massa magna,
                            commodo lobortis metus ac, imperdiet commodo nisl. Fusce imperdiet tellus et lacus auctor
                            accumsan. Aliquam sed dictum dolor. Pellentesque eu nisi euismod, accumsan lorem a, accumsan
                            ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan tortor sit amet
                            accumsan accumsan. Proin in rhoncus ex. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Etiam pulvinar mi vel vestibulum dictum. Sed
                            luctus erat vitae augue ultrices efficitur. Suspendisse vestibulum metus non feugiat
                            porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin massa magna,
                            commodo lobortis metus ac, imperdiet commodo nisl. Fusce imperdiet tellus et lacus auctor
                            accumsan. Aliquam sed dictum dolor. Pellentesque eu nisi euismod, accumsan lorem a, accumsan
                            ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan tortor sit amet
                            accumsan accumsan. Proin in rhoncus ex. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Etiam pulvinar mi vel vestibulum dictum. Sed
                            luctus erat vitae augue ultrices efficitur. Suspendisse vestibulum metus non feugiat
                            porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin massa magna,
                            commodo lobortis metus ac, imperdiet commodo nisl. Fusce imperdiet tellus et lacus auctor
                            accumsan. Aliquam sed dictum dolor. Pellentesque eu nisi euismod, accumsan lorem a, accumsan
                            ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan tortor sit amet
                            accumsan accumsan. Proin in rhoncus ex. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Etiam pulvinar mi vel vestibulum dictum. Sed
                            luctus erat vitae augue ultrices efficitur. Suspendisse vestibulum metus non feugiat
                            porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin massa magna,
                            commodo lobortis metus ac, imperdiet commodo nisl. Fusce imperdiet tellus et lacus auctor
                            accumsan. Aliquam sed dictum dolor. Pellentesque eu nisi euismod, accumsan lorem a, accumsan
                            ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos.</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <h2 class="text-2xl">Review</h2>
                    <div class="flex flex-col gap-2">
                        <div class="flex px-12 py-4 gap-10 border border-second">
                            <div class="flex flex-col items-center gap-2">
                                <div class="bg-slate-400 rounded-full w-32 h-32"></div>
                                <div class="flex flex-col gap-0.5 items-center">
                                    <h3 class=" font-semibold text-center">Tatang Suratang</h3>
                                    <p class="text-sm">Mahasiswa</p>
                                </div>
                            </div>
                            <p class="text-sm pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                                accumsan tortor sit amet accumsan accumsan. Proin in rhoncus ex. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pulvinar
                                mi vel vestibulum dictum. Sed luctus erat vitae augue ultrices efficitur. Suspendisse
                                vestibulum metus non feugiat porttitor. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Proin massa magna, commodo lobortis metus ac, imperdiet commodo nisl.</p>
                        </div>
                        <div class="flex px-12 py-4 gap-10 border border-second">
                            <div class="flex flex-col items-center gap-2">
                                <div class="bg-slate-400 rounded-full w-32 h-32"></div>
                                <div class="flex flex-col gap-0.5 items-center">
                                    <h3 class=" font-semibold text-center">Tatang Suratang</h3>
                                    <p class="text-sm">Mahasiswa</p>
                                </div>
                            </div>
                            <p class="text-sm pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                                accumsan tortor sit amet accumsan accumsan. Proin in rhoncus ex. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pulvinar
                                mi vel vestibulum dictum. Sed luctus erat vitae augue ultrices efficitur. Suspendisse
                                vestibulum metus non feugiat porttitor. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Proin massa magna, commodo lobortis metus ac, imperdiet commodo nisl.</p>
                        </div>
                        <div class="flex px-12 py-4 gap-10 border border-second">
                            <div class="flex flex-col items-center gap-2">
                                <div class="bg-slate-400 rounded-full w-32 h-32"></div>
                                <div class="flex flex-col gap-0.5 items-center">
                                    <h3 class=" font-semibold text-center">Tatang Suratang</h3>
                                    <p class="text-sm">Mahasiswa</p>
                                </div>
                            </div>
                            <p class="text-sm pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                                accumsan tortor sit amet accumsan accumsan. Proin in rhoncus ex. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pulvinar
                                mi vel vestibulum dictum. Sed luctus erat vitae augue ultrices efficitur. Suspendisse
                                vestibulum metus non feugiat porttitor. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Proin massa magna, commodo lobortis metus ac, imperdiet commodo nisl.</p>
                        </div>
                    </div>
                </div>
            </main>
            <div class="absolute w-4/12 border border-second top-32 right-24">
                <img src="" alt="gambar" class="bg-slate-400 h-32">
                <div class="px-4 text-xl py-2 ">
                    <p>Rp. 0 <span class="line-through">Rp. 500.000</span></p>
                    <div class="flex h-10 gap-3 mt-3">
                        <a class="w-full bg-primary flex items-center justify-center text-background">Beli kursus
                            ini</a>
                        <button type="button" class="w-3/12 border border-second">i</button>
                    </div>
                </div>
            </div>

            <div class="bg-second h-[1px] mx-24 mt-16"></div>
            <footer class="flex justify-between items-center px-[80px] pt-8 pb-8 text-white">
                <h1 class="text-3xl font-bold text-primary drop-shadow-md">PojoKoding</h1>
                <p>PojoKoding Copyright 2023</p>
            </footer>
        </div>
    </div>
</template>