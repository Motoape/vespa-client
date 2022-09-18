import Image, { ImageProps } from 'next/image';

/**
 * next image auto height
 * @see https://kir93.tistory.com/entry/NextJS-Image-%ED%83%9C%EA%B7%B8-height-auto%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
 * 이미지 스켈레톤
 * @see https://velog.io/@sangbooom/next.js-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%8A%A4%EC%BC%88%EB%A0%88%ED%86%A4-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0
 */
interface BlurImageProps extends ImageProps {
  remote?: boolean; // 외부 image 사용 시 true
}

function BlurImage(props: BlurImageProps) {
  if (props.remote) {
    return (
      <div className="blur-image">
        <Image
          className="auto"
          layout="fill"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          {...props}
        />
      </div>
    );
  }

  return (
    <>
      <Image
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        {...props}
      />
    </>
  );
}

export default BlurImage;
