export default function ContentText() {
  return (
    <>
        <div className="flex flex-col gap-5 max-w-[800px] pb-[160px]">
            <h1 className="font-bold text-[32px] leading-[48px]">Pengenalan UI UX</h1>
            <article id="Content-wrapper">
                <p>Dalam artikel ini, kita akan membahas tentang Laravel, mengapa framework ini dibuat, alasan mengapa belajar Laravel, keunggulan utama Laravel, persiapan yang diperlukan, langkah-langkah belajar Laravel, dan bagaimana menemukan mentor serta proyek sampingan untuk meningkatkan keterampilan Anda.</p>
                <h3>Dasar Design Principle</h3>
                <p>Laravel adalah framework open-source untuk PHP yang dibuat oleh Taylor Otwell. Framework ini dirancang untuk pengembang web yang ingin bekerja dengan cara yang elegan dan menyenangkan.</p>
            </article>
        </div>
        <div className="fixed bottom-0 w-[calc(100%-400px)] h-[151px] flex items-end justify-end pb-5 bg-[linear-gradient(0deg,#FFFFFF_49.67%,rgba(255,255,255,0)_84.11%)]">
            <button type="button" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                Mark as Completed
            </button>
        </div>
    </>
  )
}
