export default function SlideOne() {
    return (
        <div className='flex flex-row px-28 py-12 justify-between'>
            <img className='pl-16'
                 src='/assets/one.png'
                 alt='image1'
            />
            <div className='font-semibold pr-16 flex flex-col justify-center'>
                <p className='text-3xl mb-5'>
                    <span className='italic'>Next Blog</span>
                    는 다음과 같은 기능을 제공해요.
                </p>
                <ul className='text-2xl text-gray-500 font-medium list-disc list-inside'>
                    <li className='mb-3'>게시글을 등록하면 폭죽이 터져요!</li>
                    <li className='mb-3'>마음에 드는 게시글을 클립보드 복사를 사용해 쉽게 공유할 수 있어요!</li>
                </ul>
            </div>
        </div>
    );
}
