
type ContentSectionProps = {
    headerText: string;
    sectionId: string;
    content: JSX.Element[]
}

export function ContentSection(props: ContentSectionProps): JSX.Element {
    const { headerText, sectionId, content } = props;
    return (
        <>
            <h2 className="style_for_h2">{headerText}</h2>
            <section className="flex-container" id={sectionId}>
                {content}
            </section>
        </>
    )
}
