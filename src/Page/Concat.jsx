import React, { useEffect, useState } from "react";
import "../Components/ConcatTols/Concat.scss";
import { NavLink } from "react-router-dom";

const Concat = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const TELEGRAM_BOT_TOKEN = "7866113672:AAGFq4SagMcM_x_AbjvFbb2nkzrOFoN8-Ho";
    const TELEGRAM_CHAT_ID = "6992354984";

    const telegramMessage = `
📝 <b>Yangi habar:</b>

👤 <b>Ism:</b> ${formData.name}
📞 <b>Telefon:</b> ${formData.phone}
💬 <b>Xabar:</b> ${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        setModalMessage("✅ Xabar muvaffaqiyatli yuborildi!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        throw new Error("Telegram API'da xatolik yuz berdi");
      }
    } catch (error) {
      console.error(error);
      setModalMessage("❌ Xabar yuborishda xatolik yuz berdi.");
    } finally {
      setIsModalOpen(true); // Modalni ochish
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Modalni yopish
  };
  useEffect(() => {
    window.scrollTo(50, 0);

    
  }, []);

  return (
    <>
      <div className="Concat-main">
        <div className="concat-logo">
          <NavLink to={"/"}>
            <img src="Nav-img/Mask group.png" alt="" />

            <h3>
              MATU <br /> <span>school</span>
            </h3>
          </NavLink>
        </div>

        <div className="container">
          <div className="concat-text">
            <h2>Напишите нам</h2>

            <p>Режим работы тех.поддержки</p>

            <h3>Пн-Сб с 9:00 до 19:00</h3>

            <p>
              Время ответа в течениие{" "}
              <span>
                24 <br /> часов
              </span>{" "}
              с момента обращения
            </p>
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Ваше имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Ваш телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Введите ваш телефон"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="message">Текст сообщения *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Оставьте свое сообщение"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Отправить сообщение
              </button>
            </form>

       
          </div>
        </div>
        {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <p>{modalMessage}</p>
                  <button onClick={closeModal} className="close-btn">
                    Закрыть
                  </button>
                </div>
              </div>
            )}


      </div>
    </>
  );
};

export default Concat;
