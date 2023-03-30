function DescriptionContainer({title, content}) {
  return (
    <div className="text-white">
      <p className="text-3xl text-center mb-2">{title}</p>
      <p>{content}</p>
    </div>
  );
}

export default DescriptionContainer;
