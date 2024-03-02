import Card from "@/components/Blog/Card";
import { Blog } from "@/constant/data";
const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
];
const page = () => {
  return (
    <div style={{ minHeight: "700px" }} className="blog my-4 py-4">
      <div className="container">
        <div className="heading flex items-center justify-center gap-3 flex-col">
          <h1 className="font-bold text-[30px]">Blog</h1>
          <p className="xl:w-[70%] w-[100%] text-center">
            Find the perfect car for your needs at Cars.com. Shop new and used
            cars, sell your car, compare prices, and explore financing options
            to find your dream car .
          </p>
          <p className="text-gray-600 text-[14px] text-center xl:w-[50%] w-[80%] ">
            Browse new and used cars by price or model, with details on
            specifications, prices,{" "}
          </p>
        </div>
        <div className="blog-container flex flex-wrap items-center gap-3 justify-center">
          {Blog.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                date={item.date}
                description={item.description}
                tags={item.tags}
                author={item.author}
                image={images[index]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
