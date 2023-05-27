<template>
    <div class="h-screen">
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
        <div class=" bg-[#191825] px-[80px] py-[20px] flex flex-col gap-6 h-full">
            <div class="flex gap-5 font-medium">
                <button class="text-xl text-primary">Kursusku</button>
                <div class="w-0.5 bg-second"></div>
                <button class="text-xl text-[#433D85]">Akunku</button>
            </div>
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl font-medium">Lanjutkan belajar</h1>
                <div class="flex flex-col gap-3">
                    <div class="flex justify-between items-center border border-second px-6 py-4">
                        <div class="flex gap-4">
                            <div class="w-12 h-12 bg-slate-400 rounded-full"></div>
                            <div class="flex flex-col">
                                <p class="font-medium">Complete Machine Learning & Data Science Bootcamp 2023</p>
                                <p>Artikel 7/18</p>
                            </div>
                        </div>
                        <button class="bg-primary px-10 py-1 rounded-sm text-background font-medium text-sm">Lanjut belajar</button>
                    </div>
                    <div class="flex justify-between items-center border border-second px-6 py-4">
                        <div class="flex gap-4">
                            <div class="w-12 h-12 bg-slate-400 rounded-full"></div>
                            <div class="flex flex-col">
                                <p class="font-medium">Complete Machine Learning & Data Science Bootcamp 2023</p>
                                <p>Artikel 7/18</p>
                            </div>
                        </div>
                        <button class="bg-primary px-10 py-1 rounded-sm text-background font-medium text-sm">Lanjut belajar</button>
                    </div>
                    <div class="flex justify-between items-center border border-second px-6 py-4">
                        <div class="flex gap-4">
                            <div class="w-12 h-12 bg-slate-400 rounded-full"></div>
                            <div class="flex flex-col">
                                <p class="font-medium">Complete Machine Learning & Data Science Bootcamp 2023</p>
                                <p>Artikel 7/18</p>
                            </div>
                        </div>
                        <button class="bg-primary px-10 py-1 rounded-sm text-background font-medium text-sm">Lanjut belajar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>