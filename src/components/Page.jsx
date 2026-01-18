export default function Page({ title }) {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600">
        Content for {title} will go here.
      </p>
    </div>
  );
}
