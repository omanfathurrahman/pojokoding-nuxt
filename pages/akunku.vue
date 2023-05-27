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
        <div class="bg-[#191825] px-[80px] py-[20px] flex flex-col gap-6 h-full">
            <div class="flex gap-5 font-medium">
                <button class="text-xl text-[#433D85]">Kursusku</button>
                <div class="w-0.5 bg-second"></div>
                <button class="text-xl  text-primary">Akunku</button>
            </div>
            <div class="flex gap-10">
                <div class="w-64 h-52 rounded-full bg-slate-400 "></div>
                <div class="w-full flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                        <p>Nama:</p>
                        <div class="flex border border-second rounded-lg pl-4">
                            <input type="text" name="" id="" class="w-full bg-inherit" value="Tatang Suratang">
                            <button class="min-w-fit border-l border-l-second py-2 px-2">Ubah nama</button>
                        </div>
                        <p class="text-xs">Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p>Email:</p>
                        <div class="flex border border-second rounded-lg pl-4">
                            <p class="py-2">tatang@example.com</p>
                        </div>
                        <p class="text-xs">Kamu tidak dapat mengubah surel yang anda gunakan</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p>Kata sandi:</p>
                        <div class="flex border border-second rounded-lg pl-4">
                            <input type="password" name="" id="" class="w-full bg-inherit" value="******">
                            <button class="min-w-fit border-l border-l-second py-2 px-2">Ubah kata sandi</button>
                        </div>
                        <p class="text-xs">Anda hanya dapat mengubah kata sandi anda tiap 2 hari</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>