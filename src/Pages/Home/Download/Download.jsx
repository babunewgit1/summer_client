import React from "react";
import download from "../../../assets/download.jpg";
import { Link } from "react-router-dom";
import playStore from "../../../assets/playstore.png";
import apple from "../../../assets/apple.png";

const Download = () => {
  return (
    <section id="download">
      <div className="mycontainer">
        <div className="downloadWrapper grid grid-cols-2 items-center">
          <div className="downloadLeft">
            <img
              className="block w-full"
              src={download}
              alt="images not founds"
            />
          </div>
          <div className="downloadRight">
            <div className="downloadHeading">
              <h2 className="text-4xl font-semibold">
                Download Our Mobile App
              </h2>
              <p className="my-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit, consectetur et nihil, fugiat aliquam facilis
                suscipit officia doloribus tenetur nam unde fuga placeat!
                Deleniti illo praesentium alias, a aliquam similique.
              </p>
              <ul>
                <li className="inline-block">
                  <Link className="block" to="#">
                    <img
                      className="block w-[240px] h-[60px] object-cover rounded-md"
                      src={playStore}
                      alt=""
                    />
                  </Link>
                </li>
                <li className="inline-block ml-6">
                  <Link className="block" to="#">
                    <img
                      className="block w-[240px] h-[60px] object-cover rounded-md"
                      src={apple}
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
