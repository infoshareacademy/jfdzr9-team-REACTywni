import {
  DesignerWidget,
  DesignerPhoto,
  DesignerTags,
  DesignerContent,
  Tag,
  DesignerTagsSecond,
  TagSecond,
  TagsWrapper,
} from "./SingleDesignerWidget.styled";
import designer from "../../../public/designer.jpg";
import designer3 from "../../../public/designer3.jpg";

export const SingleDesignerWidget = () => {
  return (
    <>
      <DesignerWidget>
        <DesignerPhoto src={designer} />
        <DesignerContent>
          <h3>Julia Popławska</h3>
          Cześć, jestem Julka! Projektowanie graficzne to moja pasja i sposób na wyrażanie siebie. W zawodzie grafika
          pracuję już od kilku lat, moją specjalnością jest projektowanie identyfikacji wizualnej oraz interfejsów
          użytkownika.
        </DesignerContent>
        <TagsWrapper>
          <DesignerTags>
            <Tag>branding</Tag>
            <Tag>UX/UI</Tag>
          </DesignerTags>
          <DesignerTagsSecond>
            <TagSecond>ulotki</TagSecond>
            <TagSecond>plakaty</TagSecond>
            <TagSecond>photoshop</TagSecond>
            <TagSecond>figma</TagSecond>
          </DesignerTagsSecond>
        </TagsWrapper>
      </DesignerWidget>

      <DesignerWidget>
        <DesignerPhoto src={designer3} />
        <DesignerContent>
          <h3>Klaudiusz Wyrzykowski</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi similique voluptatibus recusandae. Tempore hic
          quasi eos pariatur id numquam officiis vel dolores culpa. Odit quo vitae ipsam dolorum ipsa eius!
        </DesignerContent>
        <TagsWrapper>
          <DesignerTags>
            <Tag>UX/UI</Tag>
            <Tag>druk</Tag>
            <Tag>inne</Tag>
          </DesignerTags>
          <DesignerTagsSecond>
            <TagSecond>ux</TagSecond>
            <TagSecond>ui</TagSecond>
            <TagSecond>figma</TagSecond>
            <TagSecond>plakaty</TagSecond>
            <TagSecond>ulotki</TagSecond>
          </DesignerTagsSecond>
        </TagsWrapper>
      </DesignerWidget>
    </>
  );
};
