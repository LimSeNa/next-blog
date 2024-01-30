export default function SlideOne() {
    return (
        <div className='flex flex-row px-28 py-12 justify-between'>
            <div className='font-semibold pl-16 flex flex-col justify-center'>
                <p className='text-3xl mb-5'>
                    게시글 작성 후 등록 버튼을 누르면 폭죽이 터져요!
                </p>
                <button  className='w-1/4 h-12 bg-green-500 rounded-xl '
                         type='button'
                >
                    폭죽보러 가기
                </button>
            </div>
            <img className='pr-16'
                 src='/assets/two.png'
                 alt='image2'
            />
        </div>
    );
}
