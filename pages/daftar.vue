<template>
    <div class="flex justify-center items-center h-screen bg-background">
        <div class="w-3/12 flex flex-col gap-4">
            <div class="border border-second">
                <h2 class="bg-[#262437] text-center text-2xl py-2">Daftar</h2>
                <div class="flex flex-col px-8 py-6 gap-3">
                    <form action="" class="flex flex-col gap-2">
                        <input type="text" name="" id="" placeholder="Nama pengguna" class="py-2 px-2 border border-second bg-inherit text-center rounded-md text-[#494953]">
                        <input type="email" name="" id="" placeholder="Email" class="py-2 px-2 border border-second bg-inherit text-center rounded-md text-[#494953]">
                        <input type="password" name="" id="" placeholder="Kata Sandi" class="py-2 px-2 border border-second bg-inherit text-center rounded-md text-[#494953]">
                        <input type="submit" value="Daftar" class="py-2 px-2 bg-second text-white rounded-md">
                    </form>
                    <div class="flex items-center gap-3">
                        <div class="w-full h-0.5 bg-[#494953]"></div>
                        <p class="min-w-fit text-sm text-[#494953]">Atau daftar dengan</p>
                        <div class="w-full h-0.5 bg-[#494953]"></div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <button type="button" class="py-2 px-2 border border-second bg-inherit text-center rounded-md w-full">Google</button>
                        <p class="text-sm">Dengan daftar ke PojoKoding, kamu menyetujui <span class="text-second">ketentuan</span> yang kami tetapkan</p>
                    </div>
                </div>
            </div>
            <div class="border border-second flex flex-col gap-1 px-8 pt-1.5 pb-3">
                <p class="text-sm">Sudah punya akun?</p>
                <button type="button" class="py-2 px-2 border border-second bg-inherit text-center rounded-md w-full">Masuk</button>
            </div>
        </div>
    </div>
</template>