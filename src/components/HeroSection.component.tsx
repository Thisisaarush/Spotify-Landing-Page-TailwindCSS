export const HeroSection = () => {
  return (
    <div className="relative">
      <img
        className="max-h-screen min-w-full"
        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="banner"
      />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white flex flex-col justify-center items-center">
        <h1 className="font-bold text-5xl mb-8">Music for everyone.</h1>
        <button className="bg-green-600 py-3 px-10 rounded-full text-sm font-bold uppercase hover:bg-green-700">
          Get Spotify Free
        </button>
      </div>
    </div>
  );
};
