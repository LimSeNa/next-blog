'use client';
import {GoPaperclip} from "react-icons/go";
import React from "react";

export default function ReadPage() {
    const [isClick, setIsClick] = React.useState<boolean | undefined>(false);

    const handleCopy = () => {
        // URL을 저장할 textarea 공간 생성
        let copyArea = document.createElement('textarea');
        document.body.appendChild(copyArea);

        // 생성한 textarea에 URL 저장
        const url = window.document.location.href;
        copyArea.value = url;

        // textarea에 있는 값을 선택한 후 복사
        copyArea.select();
        document.execCommand('copy');

        // 복사 후 제거(textarea 비우기)
        document.body.removeChild(copyArea);
        setIsClick(!isClick);

        setTimeout(() => {
            setIsClick(false);
        }, 3000);
    };

    return (
        <div className='flex flex-row px-28 py-12 justify-between'>
            <div className='w-[120px] h-[95px] my-auto flex flex-col items-center'>
                <button
                    className='w-[50px] h-[50px] rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-300'
                    type='button'
                    onClick={handleCopy}
                >
                    <GoPaperclip className='w-7 h-7'/>
                </button>
                {isClick ? <div className='bg-emerald-200 text-sm px-1.5 py-1 mt-3 rounded-md'>복사되었습니다!</div> : null}
            </div>
            <div className='w-10/12'>
                <div className='mb-16'>
                    <p className='text-4xl font-bold mb-4'>Next.js를 사용하여 블로그를 만들어 보자!</p>
                    <div className='text-xl text-gray-500'>
                        <span className='mr-1'>서동권</span>
                        <span className='mr-1'>•</span>
                        <span>3분전</span>
                    </div>
                </div>
                <div>
                    <p className='text-lg font-semibold'>기능 소개</p>
                    <ul className='list-decimal list-inside mb-3'>
                        <li>게시글 작성 후 등록 버튼을 누르면 폭죽 애니메이션이 터진다.</li>
                        <li>링크 공유 버튼을 누르면 현재 페이지의 주소가 복사된다.</li>
                    </ul>
                    <p className='text-lg font-semibold'>개발 일기</p>
                    <p className='w-full text-justify'>
                        2024/01/28 게시글 작성 버튼 클릭 시 폭죽 애니메이션을 발생시키기 위해 gasp라는 API를 사용해보았다.
                        공식 문서에서 권장하는대로 코드를 작성하였으나 원하는대로 적용되지 않았다. 왜 그런지 이유를 분석해본 결과
                        유료 결제를 해야만 본 서비스를 이용할 수 있다는 사실을 알게되었고, 우린 낭비한 시간에 대한 허무함을 느끼며 다른 방법을 조사하기 시작했다.
                        그런데 짜잔 우리가 딱 원하던 효과와 동일한 폭죽 애니메이션을 만들어 놓은 코드를 발견하였고,
                        이 효과는 앞서 말한 gasp보다 사용하기도 훨씬 간단하게 작성되어있었다. 우린 혹시나 하는 마음에 기쁜 마음을 누르고 코드를 우리 프로젝트에 적용해보았다.
                        결과는 당장 이 화면의 게시글 작성 버튼을 눌러 게시글 작성을 진행하면 확인할 수 있을 것이다. 기가막히게 이쁜 폭죽 놀이를 확인할 수 있다.
                        우린 성공해낸 것이다ㅋ
                    </p>
                </div>
            </div>
        </div>
    );
}
