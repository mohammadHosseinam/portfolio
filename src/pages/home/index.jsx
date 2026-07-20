import React from 'react'
import Button from '../../components/Button'
import Header from '../../layout/Header'
import Hero from "../../assets/images/hero.png"
import ProductDesign from "../../assets/images/ProductDesign.png"
import Redesign from "../../assets/images/Redesign.png"
import Research from "../../assets/images/Research.png"
import CRO from "../../assets/images/CRO.png"
import Rostino from "../../assets/images/Rostino.png"
import AboutMe from "../../assets/images/AboutMe.png"
import MobileContactBanner from "../../assets/images/MobileContactBanner.png"
import ContactBanner from "../../assets/images/ContactBanner.png"
import SectionHeading from '../../components/SectionHeading'
import ServicesCard from '../../components/ServicesCard'
import { Link } from 'react-router-dom'
import NextIcon from '../../assets/icons/nextIcon'
import SkillChip from '../../components/SkillChip'
import ContactButton from '../../components/ContactButton'
import DribbbleIcon from '../../assets/icons/dribbbleIcon'
import LinkedinIcon from '../../assets/icons/linkedinIcon'
import InstagramIcon from '../../assets/icons/instagramIcon'
import TelegramIcon from '../../assets/icons/telegramIcon'
import BehanceIcon from '../../assets/icons/behanceIcon'

function Home() {
    return (
        <div className="max-w-294 mx-auto px-4 sm:px-6 lg:px-0">
            <Header />
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                <div className='flex flex-col gap-6'>
                    <div>
                        <p className='text-[20px] font-medium text-[#2C2C2B]'>
                            سلام ،
                            <br />
                            من محمد حسین احمدیان هستم.
                        </p>
                        <h1 className="text-4xl lg:text-[48px] font-extrabold">من طراحی میکنم تا
                            <br /><span className='text-[#F35D28]'>مشکلات واقعی</span> حل بشن
                        </h1>
                    </div>
                    <p className='text-[24px] font-medium text-[#2C2C2B]'>
                        طراح محصولی با تمرکز بر پژوهش کاربر ، حل مسئله و
                        <br />
                        طراحی تجربه کاربری معنادار تر
                    </p>
                    <Button text='مشاهده کیس استادی' LinkTo='/#case-study' isScroll={true} />
                </div>
                <img src={Hero} alt="Hero" className="w-full max-w-md lg:max-w-none lg:w-fit" />
            </div>
            <section id='services' className='flex flex-col gap-8 mt-5'>
                <SectionHeading text={"خدمات من"} />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <ServicesCard title={"طراحی  محصول"} desc={"طراحی محصول از صفر تا رسیدن به محصول نهایی"} image={ProductDesign} bgColor={"#DEE8FF"} />
                    <ServicesCard title={"ری دیزاین  محصول"} desc={"بهبود تجربه کاربران و افزایش ارزش محصول"} image={Redesign} bgColor={"#FFF9E9"} />
                    <ServicesCard title={"تحقیقات کاربری"} desc={"بهبود تجربه کاربران و افزایش ارزش محصول"} image={Research} bgColor={"#EFEAF8"} />
                    <ServicesCard title={"بهینه سازی نرخ تبدیل"} desc={"تحلیل رفتار کاربران و افزایش تبدیل با کمک طراحی"} image={CRO} bgColor={"#F3FEE6"} />
                </div>
            </section>
            <section id='case-study' className='flex flex-col gap-8 mt-20'>
                <SectionHeading text={"کیس استادی"} />
                <div className='bg-[#FFF0EA] flex flex-col lg:flex-row p-6 rounded-2xl border-2 border-[#212121] gap-6 items-center'>
                    <img src={Rostino} className="w-full lg:w-auto" alt="Rostino" />
                    <div className='flex flex-col gap-5 '>
                        <div>
                            <h4 className='text-[20px] font-bold text-[#212121]'>روستینو</h4>
                            <p className='text-[20px] font-semibold text-[#414141]'>طراحی تجربه‌ای شخصی‌سازی‌شده برای خرید و اشتراک قهوه</p>
                        </div>
                        <p className='text-[16px] font-medium text-[#575656]'>روستینو یک پلتفرم خرید و اشتراک قهوه است که با هدف ساده‌تر کردن فرآیند انتخاب قهوه برای کاربران طراحی شده است. بسیاری از افراد هنگام خرید قهوه با تنوع زیاد محصولات، درجه رست و نت‌های طعمی دچار سردرگمی می‌شوند. روستینو با استفاده از یک تست سلیقه، قهوه‌هایی متناسب با ذائقه هر کاربر را پیشنهاد می‌دهد و تجربه‌ای شخصی‌سازی‌شده از کشف و خرید قهوه ایجاد می‌کند.</p>
                        <Link to="/casestudy/rostino" className='flex items-center'>
                            <span className='text-[20px] font-medium text-[#F35D28]'>مشاهده کیس استادی</span>
                            <NextIcon />
                        </Link>
                    </div>
                </div>
            </section>
            <section id="about" className='flex flex-col gap-8 mt-20'>
                <SectionHeading text={"درباره من"} />
                <div className='flex flex-col-reverse lg:flex-row gap-6 py-6 rounded-2xl'>
                    <div className='flex flex-col gap-5 pt-5'>
                        <div className='bg-[#FFF0EA] rounded-xl border-2 border-[#212121] flex justify-between p-6'>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-[14px] md:text-[16px] font-bold text-[#212121]'>+2 سال</h4>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#515151]'>سابقه کاری</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-[14px] md:text-[16px] font-bold text-[#212121]'>کارشناسی</h4>
                                <p className='hidden md:block text-[16px] font-medium text-[#515151]'>مدرک تحصیلی</p>
                                <p className='md:hidden text-[14px] font-medium text-[#515151]'>مدرک</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-[14px] md:text-[16px] font-bold text-[#212121]'>مهندسی نرم افزار</h4>
                                <p className='hidden md:block text-[16px] font-medium text-[#515151]'>رشته تحصیلی</p>
                                <p className='md:hidden text-[14px] font-medium text-[#515151]'>رشته</p>

                            </div>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-[14px] md:text-[16px] font-bold text-[#212121]'>شیراز</h4>
                                <p className='text-[14px] md:text-[16px] font-medium text-[#515151]'>دانشگاه</p>
                            </div>
                        </div>
                        <p className='text-[16px] font-semibold text-[#212121]'>من یه طراحم با دو سال تجربه و بک گراند فول استک دولوپری که با توجه به شناختی که از بهینه سازی نرخ تبدیل و بیزینس دارم سعی میکنم طرحی بزنم که هم نساز کارفرما و هم کاربر رو منتفع کنه و بتونه با رقبا توی بازار رقابت بکنه</p>
                        <div className='flex flex-wrap gap-3 md:gap-4'>
                            <SkillChip text={"UX Research"} />
                            <SkillChip text={"CRO & Analytics"} />
                            <SkillChip text={"Design Systems"} />
                            <SkillChip text={"Product Thinking"} />
                            <SkillChip text={"Information Architecture"} />
                        </div>
                        <Button text='دانلود رزومه' LinkTo='https://drive.google.com/file/d/1l63KS5bOT_7NfDi0LpAM6M8swm9mC0zm/view' />
                    </div>
                    <img src={AboutMe} alt="AboutMe" />
                </div>
            </section>
            <section id="contact" className='flex flex-col gap-8 mb-5 md:mb-20 '>
                <SectionHeading text={"ارتباط من"} />
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex justify-center md:justify-start flex-wrap gap-4 md:gap-12 mx-auto'>
                        <ContactButton Icon={<TelegramIcon />} linkTo={"t.me/ahmadian_Product"} />
                        <ContactButton Icon={<InstagramIcon />} linkTo={"https://www.instagram.com/mohammad_hossein_uix?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"} />
                        <ContactButton Icon={<LinkedinIcon />} linkTo={"https://www.linkedin.com/in/mohammad-hossein-ahmadian/"} />
                        <ContactButton Icon={<DribbbleIcon />} linkTo={"https://dribbble.com/mohosseim"} />
                        <ContactButton Icon={<BehanceIcon />} linkTo={"https://dribbble.com/mohosseim"} />
                    </div>
                    <Link className='w-full' to={"tel:+989032153600"}>
                        <img src={ContactBanner} className="hidden md:block w-full mt-8" alt="ContactBanner" />
                        <img src={MobileContactBanner} className="block md:hidden w-full max-w-2xl mx-auto mt-8" alt="ContactBanner" />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home