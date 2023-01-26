import React, { useState } from 'react';
import contactStyle from '../Styles/Contact.module.css';
import CurrentPageStatus from '../Components/CurrentPageStatus';
import ContactImg from '../Asset/image/SVG/Group 124.svg';
import From from '../Components/From/From';
import Input from '../Components/input/Input';
import Button from '../Components/Button';
import { toast } from 'react-toastify';
import { UserAllStateData } from '../Context/UseContextProvider';
import LoaderSpinner from '../Components/Loader';
const ContactInitialData = {
  name: '',
  email: '',
  subject: '',
  text: '',
};

const Contact = () => {
  const [user, setUser] = useState(ContactInitialData);
  const { name, email, subject, text } = user;
  const { isLoading } = UserAllStateData();

  const OnChangeEvent = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const contactInfoSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !text) {
      return toast.error('All field are mandatory to fill 🤯!');
    } else {
      return toast.success('From Submited !');
    }
  };

  return (
    <div className={`${contactStyle.ContactContainer}`}>
      <CurrentPageStatus></CurrentPageStatus>
      {isLoading && isLoading ? (
        <LoaderSpinner></LoaderSpinner>
      ) : (
        <div className="container">
          <div className="row mt-5 pt-5 ">
            <div className="col-lg-6">
              <div className={`${contactStyle.ContactInfoAbout}`}>
                <h3 className="mb-2">Information About us</h3>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis neque ultrices mattis aliquam, malesuada diam est.
                  Malesuada sem tristique amet erat vitae eget dolor lobortis.
                  Accumsan faucibus vitae lobortis quis bibendum quam.
                </p>
                <div className="d-flex">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${contactStyle.ContactWay} ms-lg-4`}>
                <h3 className="ms-4">Contact Way</h3>
                <div className="d-flex  flex-wrap gap-5 pt-3 pb-3 ps-4 ">
                  <div className="d-flex align-items-center gap-3">
                    <div className={`${contactStyle.Unicolor1}`}></div>
                    <div className="">
                      <p>Tel: 877-67-88-99</p>
                      <p>E-Mail: shop@store.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className={`${contactStyle.Unicolor2}`}></div>
                    <div className="">
                      <p>Support Forum</p>
                      <p>For over 24hr</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className={`${contactStyle.Unicolor3} `}></div>
                    <div className="">
                      <p>20 Margaret st, London</p>
                      <p>Great britain, 3NM98-LK</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className={`${contactStyle.Unicolor4}`}></div>
                    <div className="">
                      <p>Free standard shipping</p>
                      <p>on all orders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5">
            <div className="col-lg-6">
              <div className={`${contactStyle.Heading}`}>
                <h3 className="mb-2">Get In Touch</h3>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis neque ultrices tristique amet erat vitae eget dolor los
                  vitae lobortis quis bibendum quam.
                </p>
                <div className={`${contactStyle.ContactFrom}`}>
                  <From onSubmit={contactInfoSubmit} className="mt-5">
                    <div className="row mb-4">
                      <div className="col-lg-6 col-12 mb-2">
                        <Input
                          onChange={OnChangeEvent}
                          className="form-control p-2"
                          type={'text'}
                          value={name}
                          name="name"
                          pleaseholder="Your Name *"
                        ></Input>
                      </div>
                      <div className="col-lg-6 col-12">
                        <Input
                          onChange={OnChangeEvent}
                          className="form-control p-2"
                          type={'text'}
                          value={email}
                          name="email"
                          pleaseholder="Your Email *"
                        ></Input>
                      </div>
                    </div>
                    <div className="mb-4">
                      <Input
                        onChange={OnChangeEvent}
                        className="form-control p-2"
                        type={'text'}
                        value={subject}
                        name="subject"
                        pleaseholder="Subject*"
                      ></Input>
                    </div>
                    <div className="textArea">
                      <textarea
                        onChange={OnChangeEvent}
                        value={text}
                        name="text"
                        className="form-control p-2"
                        placeholder="Type Your Messege*"
                      ></textarea>
                    </div>
                    <div className={`mt-4 ${contactStyle.ButtonMail}`}>
                      <Button type="submit" title={'Send Mail'}></Button>
                    </div>
                  </From>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${contactStyle.Contact__img}`}>
                <img src={ContactImg} alt="contact-logo"></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
