<template>
    <div class="h-screen">
        <header class="flex items-center justify-between bg-[#191825] px-[80px] py-[20px] text-white">
            <h1 class="text-3xl font-bold text-[#E384FF] drop-shadow-md">PojoKoding</h1>
        </header>
        <div class="bg-[#191825] px-10 flex gap-2 h-full pt-2">
            <div class="flex flex-col gap-1 w-full">
                <div class="">
                    <button class="bg-primary px-6 py-1.5 text-background">Soal</button>
                    <button class="px-6 py-1.5">Output</button>
                </div>
                <textarea name="" id="" cols="30" rows="10" class="resize-none h-full w-full bg-[#262437] border border-second"></textarea>
            </div>
            <div class="w-full border border-second">
                <div class="flex justify-between bg-[#262437]">
                    <div class="px-2 py-1.5 flex gap-2">
                        <button class="px-6 py-1.5">Diskusi</button>
                        <button class="px-6 py-1.5">Reset</button>
                    </div>
                    <div class="px-2 py-1.5 flex gap-2">
                        <button class="border border-second px-6 py-1.5">Lorem</button>
                        <button class=" bg-primary text-background px-6 py-1.5">Lorem</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>