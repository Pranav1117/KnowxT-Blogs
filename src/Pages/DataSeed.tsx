import axios from "axios";
import React from "react";

const DataSeed = () => {
  const dummyData = [
    {
      id: "e7db28b5-4107-4e43-a172-f32c204bb12e",
    //   author: "John Doe",
    //   dateCreated: "2024-09-05T10:30:00Z",
      title: "Understanding React Hooks",
      content:
        "In this blog post, we will dive deep into React Hooks and how they have revolutionized the way we write functional components...",
    //   imgUrl:
        // "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
      authorId: 3,
    },
    {
      id: "c3423742-626e-4dc9-8141-091a0d579e9a",
    //   author: "Jane Smith",
    //   dateCreated: "2024-09-04T14:15:00Z",
      title: "A Guide to Node.js Performance Optimization",
      content:
        "Node.js is known for its speed, but optimizing performance can help scale applications even further. This guide covers...",
    //   imgUrl:
        // "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
      authorId: 3,
    },
    {
      id: "42de66eb-f04a-4eae-8346-e3a95a330c02",
    //   author: "Alice Johnson",
    //   dateCreated: "2024-09-01T08:45:00Z",
      title: "Exploring Cloudflare Workers",
      content:
        "Cloudflare Workers are a powerful tool for building scalable and serverless applications at the edge. In this post, we'll explore...",
    //   imgUrl:
        // "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
      authorId: 3,
    },
    {
      id: "55039f24-3274-4664-97c5-0407e0f37ef1",
    //   author: "Bob Brown",
    //   dateCreated: "2024-08-28T11:00:00Z",
      title: "Introduction to Prisma ORM",
      content:
        "Prisma is a next-generation ORM that makes database access easy and intuitive. This article introduces the core concepts of Prisma...",
    //   imgUrl:
        // "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
      authorId: 3,
    },
    {
      id: "9a775449-b74e-4296-a2e5-4a9249737b0f",
    //   author: "Emily White",
    //   dateCreated: "2024-08-26T09:30:00Z",
      title: "Building Serverless APIs with AWS Lambda",
      content:
        "Serverless computing is changing the landscape of backend development. In this post, we will look at how to build scalable APIs using AWS Lambda...",
    //   imgUrl:
        // "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
      authorId: 3,
    },
    {
      id: "a30f6930-69ae-4940-b485-2857f96f2200",
    //   author: "Michael Green",
    //   dateCreated: "2024-08-22T13:20:00Z",
      title: "The Rise of TypeScript in Frontend Development",
      content:
        "TypeScript has been rapidly gaining popularity in the frontend development world. This article explores why TypeScript is now the go-to language for many developers...",
    //   imgUrl:
        // "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
      authorId: 3,
    },
    {
      id: "bba449a5-f317-4811-86a0-91dc21622b29",
    //   author: "Sophia Blue",
    //   dateCreated: "2024-08-20T15:45:00Z",
      title: "Best Practices for Writing Clean Code",
      content:
        "Clean code is not just about making your code look good. It’s about writing code that is easy to understand, maintain, and extend. In this article, we will explore the best practices for achieving this...",
    //   imgUrl:
        // "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
      authorId: 3,
    },
    {
      id: "e989283d-b6e5-4ab3-b12e-295c3b2b3da0",
    //   author: "David Grey",
    //   dateCreated: "2024-08-18T10:00:00Z",
      title: "An Introduction to Microservices Architecture",
      content:
        "Microservices architecture allows developers to build applications that are easier to scale and manage. In this blog post, we explore the fundamentals of microservices...",
    //   imgUrl:
        // "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
      authorId: 3,
    },
    {
      id: "06333a04-12f4-4624-b299-3b967d4a3995",
    //   author: "Olivia Brown",
    //   dateCreated: "2024-08-15T12:10:00Z",
      title: "Getting Started with Docker and Containers",
      content:
        "Containers have revolutionized the way we think about software deployment. In this article, we will cover the basics of Docker and how it can help streamline your development workflow...",
    //   imgUrl:
        // "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
      authorId: 3,
    },
    {
      id: "ed98c9cf-e746-4193-b539-986b1135d0c5",
    //   author: "Liam Black",
    //   dateCreated: "2024-08-12T14:50:00Z",
      title: "Understanding GraphQL and its Advantages",
      content:
        "GraphQL is an alternative to REST for building APIs. It allows clients to request exactly the data they need, making it more efficient than traditional REST APIs...",
    //   imgUrl:
        // "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
      authorId: 3,
    },
  ];

  const handleDataSeed = async () => {
    const res = await axios.post(
      `http://127.0.0.1:8787/api/v1/blog/seed`,
      dummyData
    );
  };

  return (
    <div>
      <div className="pt-20">
        <button
          onClick={handleDataSeed}
          className="border bg-black text-white rounded p-2"
        >
          Seed Data
        </button>
      </div>
    </div>
  );
};

export default DataSeed;
