'use client';
import React from "react";
import MDEditor from '@uiw/react-md-editor';
import confetti from 'canvas-confetti';

export default function WritePage() {
    const [text, setText] = React.useState<string | undefined>('');

    const handleAnimation = () => {
        confetti({
            particleCount: 180, // 종이 가루 개수
            spread: 120, // 퍼져나갈 각도
            origin: { y: 0.7 } // 발사될 위치
        });
    };

    return (
        <div className='px-28 py-12 flex flex-col'>
            <div className='w-full h-[33rem]'>
                <MDEditor value={text}
                          onChange={setText}
                          textareaProps={{
                              placeholder: '당신의 생각을 마음껏 펼쳐보아요.'
                          }}
                          height='100%'
                />
            </div>
            <button className='m-auto my-10 w-fit px-4 py-2 font-semibold text-sm border-none bg-green-100 rounded-xl hover:bg-green-200'
                    type='button'
                    onClick={handleAnimation}
            >
                게시글 작성
            </button>
        </div>
    );
}
