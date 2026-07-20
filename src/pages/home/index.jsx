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
        <div className='w-294 mx-auto'>
            <Header />
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <p className='text-[20px] font-medium text-[#2C2C2B]'>
                            سلام ،
                            <br />
                            من محمد حسین احمدیان هستم.
                        </p>
                        <h1 className='text-[48px] font-extrabold'>من طراحی میکنم تا
                            <br /><span className='text-[#F35D28]'>مشکلات واقعی</span> حل بشن
                        </h1>
                    </div>
                    <p className='text-[24px] font-medium text-[#2C2C2B]'>
                        طراح محصولی با تمرکز بر پژوهش کاربر ، حل مسئله و
                        <br />
                        طراحی تجربه کاربری معنادار تر
                    </p>
                    <Button text='مشاهده کیس استادی' LinkTo='/' />
                </div>
                <img src={Hero} alt="Hero" />
            </div>
            <section className='flex flex-col gap-8 mt-5'>
                <SectionHeading text={"خدمات من"} />
                <div className='grid grid-cols-4 gap-6'>
                    <ServicesCard title={"طراحی  محصول"} desc={"طراحی محصول از صفر تا رسیدن به محصول نهایی"} image={ProductDesign} bgColor={"#DEE8FF"} />
                    <ServicesCard title={"ری دیزاین  محصول"} desc={"بهبود تجربه کاربران و افزایش ارزش محصول"} image={Redesign} bgColor={"#FFF9E9"} />
                    <ServicesCard title={"تحقیقات کاربری"} desc={"بهبود تجربه کاربران و افزایش ارزش محصول"} image={Research} bgColor={"#EFEAF8"} />
                    <ServicesCard title={"بهینه سازی نرخ تبدیل"} desc={"تحلیل رفتار کاربران و افزایش تبدیل با کمک طراحی"} image={CRO} bgColor={"#F3FEE6"} />
                </div>
            </section>
            <section className='flex flex-col gap-8 mt-20'>
                <SectionHeading text={"کیس استادی"} />
                <div className='bg-[#FFF0EA] flex p-6 rounded-2xl border-2 border-[#212121] gap-6 items-center'>
                    <img src={Rostino} alt="Rostino" />
                    <div className='flex flex-col gap-5 '>
                        <div>
                            <h4 className='text-[20px] font-bold text-[#212121]'>روستینو</h4>
                            <p className='text-[20px] font-semibold text-[#414141]'>طراحی تجربه‌ای شخصی‌سازی‌شده برای خرید و اشتراک قهوه</p>
                        </div>
                        <p className='text-[16px] font-medium text-[#575656]'>روستینو یک پلتفرم خرید و اشتراک قهوه است که با هدف ساده‌تر کردن فرآیند انتخاب قهوه برای کاربران طراحی شده است. بسیاری از افراد هنگام خرید قهوه با تنوع زیاد محصولات، درجه رست و نت‌های طعمی دچار سردرگمی می‌شوند. روستینو با استفاده از یک تست سلیقه، قهوه‌هایی متناسب با ذائقه هر کاربر را پیشنهاد می‌دهد و تجربه‌ای شخصی‌سازی‌شده از کشف و خرید قهوه ایجاد می‌کند.</p>
                        <Link to="/" className='flex items-center'>
                            <span className='text-[20px] font-medium text-[#F35D28]'>مشاهده کیس استادی</span>
                            <NextIcon />
                        </Link>
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-8 mt-20'>
                <SectionHeading text={"درباره من"} />
                <div className='flex p-6 rounded-2xl gap-6'>
                    <div className='flex flex-col gap-5 pt-5'>
                        <div className='bg-[#FFF0EA] rounded-xl border-2 border-[#212121] flex justify-between p-6'>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-[16px] font-bold text-[#212121]'>+2 سال</h4>
                                <p className='text-[16px] font-medium text-[#515151]'>سابقه کاری</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-[16px] font-bold text-[#212121]'>کارشناسی</h4>
                                <p className='text-[16px] font-medium text-[#515151]'>مدرک تحصیلی</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-[16px] font-bold text-[#212121]'>مهندسی نرم افزار</h4>
                                <p className='text-[16px] font-medium text-[#515151]'>رشته تحصیلی</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-[16px] font-bold text-[#212121]'>شیراز</h4>
                                <p className='text-[16px] font-medium text-[#515151]'>دانشگاه</p>
                            </div>
                        </div>
                        <p className='text-[16px] font-semibold text-[#212121]'>من یه طراحم با دو سال تجربه و بک گراند فول استک دولوپری که با توجه به شناختی که از بهینه سازی نرخ تبدیل و بیزینس دارم سعی میکنم طرحی بزنم که هم نساز کارفرما و هم کاربر رو منتفع کنه و بتونه با رقبا توی بازار رقابت بکنه</p>
                        <div className='flex flex-wrap gap-4'>
                            <SkillChip text={"UX Research"} />
                            <SkillChip text={"CRO & Analytics"} />
                            <SkillChip text={"Design Systems"} />
                            <SkillChip text={"Product Thinking"} />
                            <SkillChip text={"Information Architecture"} />
                        </div>
                        <Button text='دانلود رزومه' LinkTo='/' />
                    </div>
                    <img src={AboutMe} alt="AboutMe" />
                </div>
            </section>
            <section className='flex flex-col gap-8 mb-20'>
                <SectionHeading text={"ارتباط من"} />
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex flex-wrap gap-12 mx-auto'>
                        <ContactButton Icon={<TelegramIcon />} />
                        <ContactButton Icon={<InstagramIcon />} />
                        <ContactButton Icon={<LinkedinIcon />} />
                        <ContactButton Icon={<DribbbleIcon />} />
                        <ContactButton Icon={<BehanceIcon />} />
                    </div>
                    <img src={ContactBanner} alt="ContactBanner" />
                </div>
            </section>
        </div>
    )
}

export default Home