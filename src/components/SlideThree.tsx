export default function SlideOne() {
    return (
        <div className='flex flex-row px-28 py-12 justify-between'>
            <img className='pl-16'
                 src='/assets/three.png'
                 alt='image3'
            />
            <div className='font-semibold pr-16 flex flex-col justify-center'>
                <p className='text-3xl mb-5'>
                    클립보드 복사 후 원하는 곳에 링크를 붙여넣어보세요!
                </p>
                <button className='w-1/4 h-12 bg-green-500 rounded-xl '
                        type='button'
                >
                    복사하러 가기
                </button>
            </div>
        </div>
    );
}
