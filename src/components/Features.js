const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p>Explanation of Feature 1.</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p>Explanation of Feature 2.</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p>Explanation of Feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
