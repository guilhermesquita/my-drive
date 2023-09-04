export type image = {
    urlBackgroundImage: string
}

export const Thumbnail = ({ urlBackgroundImage }: image) => {
    return (
        <div>
            <img/>
            <img src={urlBackgroundImage} />
        </div>
    )
}