import React, { FunctionComponent } from "react";
import ContactUs from "../components/contactus";
import Products from "../components/products";
import Projects from "../components/projects";
import Slider from "../components/slider";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Slider
        slides={[
          {
            heading: "Johar Traders",
            description: "No.1 Distributor of Aluminum Windows",
          },
        ]}
      />
      <Products
        products={[
          {
            name: "Sliding",
            image:
              "https://d21xn5q7qjmco5.cloudfront.net/images/windowtype/thumb1629364650.png",
            brand: "Johar",
            thickness: "5mm",
            description:
              "Johar aluminum sliding windows are designed for modern living. They offer smooth and effortless operation, allowing you to bring the outdoors in. With sleek profiles and energy-efficient features, these windows combine functionality and aesthetics seamlessly.",
          },
          {
            name: "Casement",
            image:
              "https://d21xn5q7qjmco5.cloudfront.net/images/windowtype/thumb1626199479.png",
            brand: "Johar",
            thickness: "3mm",
            description:
              "Johar casement aluminum windows provide exceptional ventilation and a contemporary look. Their innovative design ensures a tight seal, maximizing energy efficiency. These windows are perfect for those who value both style and performance.",
          },
          {
            name: "Tilt and Turn",
            image:
              "https://d21xn5q7qjmco5.cloudfront.net/images/windowtype/thumb1629364824.jpg",
            brand: "Johar",
            thickness: "7mm",
            description:
              "Johar tilt and turn aluminum windows offer versatility and elegance. They open inward for easy cleaning and provide multiple ventilation options. These windows are a smart choice for those seeking a blend of functionality and aesthetics.",
          },
          // {
          //   name: "Large Fixed",
          //   image:
          //     "https://d21xn5q7qjmco5.cloudfront.net/images/windowtype/thumb1671615410.png",
          //   brand: "Johar",
          //   thickness: "7mm",
          //   description:
          //     "Johar large fixed aluminum windows are all about creating stunning views and maximizing natural light. Their expansive glass panels and slim frames make them ideal for showcasing breathtaking landscapes and architectural features.",
          // },
          // {
          //   name: "Louvers",
          //   image:
          //     "https://d21xn5q7qjmco5.cloudfront.net/images/windowtype/thumb1671619075.png",
          //   brand: "Johar",
          //   thickness: "7mm",
          //   description:
          //     "Johar louvers aluminum windows offer customizable airflow control and privacy. Their unique design allows you to adjust the angle of the blades, allowing for excellent ventilation while maintaining security. These windows are perfect for areas where privacy and climate control are essential.",
          // },
        ]}
      />
      <Projects
        projects={[
          {
            name: "Project 1",
            image:
              "https://d21xn5q7qjmco5.cloudfront.net/images/gallery_images/1639138641.webp",
            location: "Hyderabad",
            description: "We delivered all the facade, windows, doors.",
          },
          {
            name: "Project 2",
            image:
              "https://d21xn5q7qjmco5.cloudfront.net/images/gallery_images/1639138544.webp",
            location: "Hyderabad",
            description:
              "We were given the contract of all the exterior and interior glass for windows and doors.",
          },
          {
            name: "Project 3",
            image:
              "https://d21xn5q7qjmco5.cloudfront.net/images/gallery_images/1446819759united_engineer_manesar-min.jpg",
            location: "Hyderabad",
            description:
              "We provided all the glasses for the doors, windows and facade.",
          }
        ]}
      />
      <ContactUs />
    </>
  );
};

export default Home;
