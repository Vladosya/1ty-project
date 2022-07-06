<template>
	<div class="main">
		<div class="container">
			<div class="main-header">
				<div class="main-header-left">
					<div class="main-header-left__title" @click="goHome">1ty.me - "One Time"</div>
				</div>
				<div class="main-header-right">
					<div class="main-header-right__title">
						One Time Self Destructing Links For Sharing Sensitive Information
					</div>
				</div>
			</div>
		</div>
		<div class="main-content">
			<div class="container">
				<div class="main-content-info">
					<div class="main-content-info-left">
						<div class="main-content-info-left__title">What is it?</div>
						<div class="main-content-info-left__information">
							If you need to send a password or some other form of simple but sensitive
							information to someone you can not send it over IM or email. These methods are not
							secure as anyone with little knowledge can intercept this information during
							transmission. Using 1ty.me as the "middle man" you can safely and securely transfer
							this data to your recipient. Visit our <NuxtLink to="/about">about</NuxtLink> or
							<NuxtLink to="/faq">faq</NuxtLink> page for more information.
						</div>
					</div>
					<div class="main-content-info-right">
						<div class="main-content-info-right-top">
							<div class="main-content-info-right-top__title">How do I use it?</div>
							<div class="main-content-info-right-top__step">
								<a class="main-content-info-right-top__step_link"
									:class="{ 'main-content-info-right-top__step_active': currentStep === 0 }" href="#"
									@click="currentStep = 0">Step
									1</a>
								<a class="main-content-info-right-top__step_link"
									:class="{ 'main-content-info-right-top__step_active': currentStep === 1 }" href="#"
									@click="currentStep = 1">Step 2</a>
								<a class="main-content-info-right-top__step_link"
									:class="{ 'main-content-info-right-top__step_active': currentStep === 2 }" href="#"
									@click="currentStep = 2">Step 3</a>
							</div>
						</div>
						<div class="main-content-info-right-bottom">
							<div :class="{
								'main-content-info-right-bottom__img': currentStep === 0,
								'main-content-info-right-bottom__img_two': currentStep === 1,
								'main-content-info-right-bottom__img_three': currentStep === 2
							}">
								<span></span>
							</div>
							<div class="main-content-info-right-bottom__info">
								{{ stepText[currentStep] }}
							</div>
						</div>
					</div>
				</div>
				<div class="main-content-form" v-if="isForm">
					<div class="main-content-form__input">
						<textarea class="main-content-form__input_textarea" v-model="createNoteForm.messageInput"
							placeholder="Enter  your  notes  then  press  the  Generate  Link  button"></textarea>
					</div>
					<div class="main-content-form__btn">
						<button :disabled="isDisabledBtnSubmit" @click="submitCreateNoteForm">
							<img src="@/static/assets/img/zamok.png" alt="">
							Generate Link
						</button>
					</div>
					<div class="main-content-form__info">
						Read our <a href="https://www.envisionpharmagroup.com/privacy-policy" target="_blank">Privacy
							Policy</a> page to see
						that we take your privacy
						seriously!
					</div>
				</div>
				<div v-if="isLoading" class="main-content-loading">
					<div class="main-content-loading__img">
						<img src="@/static/assets/img/loading-bar.gif" alt="">
					</div>
				</div>
				<div class="main-content-readylink" v-if="isReadyLink">
					<div class="main-content-readylink__link">
						<span>Your Link</span>
						<input type="text" v-model.trim="inputLink">
					</div>
					<div class="main-content-readylink__btn">
						<div class="main-content-readylink__btn_copy">
							<button @click="copyText">Copy Link</button>
						</div>
						<div class="main-content-readylink__btn_generate">
							<button @click="generateAnotherLink">Generate Another Link</button>
						</div>
					</div>
					<div class="main-content-readylink__info" v-if="isCopyLink">
						<img src="@/static/assets/img/galka.png" alt="">
						<div>Link has been copied to the clipboard.</div>
					</div>
				</div>
			</div>
		</div>
		<div class="main-footer">
			<div class="container">
				<div class="main-footer-content">
					<div class="main-footer-content__left">
						<div>
							<NuxtLink to="/about" class="main-footer-content__left_link">About 1ty.me</NuxtLink>
						</div>
						<div>
							<NuxtLink to="/faq" class="main-footer-content__left_link">Frequently Asked Questions</NuxtLink>
						</div>
						<div>
							<NuxtLink to="/privacy-policy" class="main-footer-content__left_link">Privacy Policy</NuxtLink>
						</div>
						<div>
							<a class="main-footer-content__left_link"
								href="https://www.apogeeinvent.com/?ai_sid=370950&ai_sid_key=g8xthts5pg">ApogeeInvent</a>
						</div>
					</div>
					<div class="main-footer-content__right">© 2011 - 2022 ApogeeInvent</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IHead, IData, IResCreateNote } from "@/types/pages/index";

export default Vue.extend({
	name: "home-page",
	head(): IHead {
		return {
			title: "1ty.me - One Time Self Destructing Links For Sharing Sensitive Information",
			meta: [
				{ hid: "description", name: "description", content: "Create secure one time self destructing notes to send sensitive information with simple short urls." },
			],
		}
	},
	mounted(): void {
		this.changeStepAuto();
	},
	data(): IData {
		return {
			currentStep: 0 as number,
			stepText: [
				"Use the form below to enter your sensitive information and retrieve a short URL (example: https://1ty.me/foo).",
				"Send the provided url to your recipient using your communication of choice(IM, Email etc.).",
				"When they visit this link the sensitive information will be displayed. The information is then destroyed on our system and can not be retrieved again.",
			] as string[],
			createNoteForm: {
				messageInput: "",
			},
			isForm: true,
			isLoading: false,
			isReadyLink: false,
			inputLink: "",
			isCopyLink: false,
			isDisabledBtnSubmit: false
		}
	},
	methods: {
		goHome() {
			if (this.isReadyLink === true) {
				this.isReadyLink = false;
				this.isCopyLink = false;
				this.isForm = true;
			}
		},
		changeStepAuto(): void {
			setInterval(() => {
				if (this.currentStep !== 2) {
					this.currentStep += 1;
				} else {
					this.currentStep = 0;
				}
			}, 10000)
		},
		copyText() {
			navigator.clipboard.writeText(this.inputLink);
			this.isCopyLink = true;
			this.$notify({
				title: "Success",
				message: "Note copied successfully",
				type: "success",
				position: "top-right",
			});
		},
		generateAnotherLink() {
			this.isCopyLink = false;
			this.inputLink = "";
			this.isReadyLink = false;
			this.isForm = true;
		},
		async submitCreateNoteForm() {
			try {
				if (this.createNoteForm.messageInput.length === 0) {
					this.$message({
						message: 'Please enter a valid note.',
						type: 'warning'
					});
				} else {
					this.isDisabledBtnSubmit = true;
					const resCreateNote: IResCreateNote = await this.$store.dispatch("home/createNote", this.createNoteForm.messageInput);
					if (resCreateNote.result === true) {
						this.createNoteForm.messageInput = "";
						this.isForm = false;
						this.isLoading = true;
						this.isDisabledBtnSubmit = false;
						setTimeout(() => {
							this.isLoading = false;
							this.isReadyLink = true;
							this.inputLink = `${process.env.BASE_URL}/${resCreateNote.noteId}`
						}, 3000);
					} else {
						this.isDisabledBtnSubmit = false;
						this.$notify.error({
							title: 'Error',
							message: 'Note creation error'
						});
					}

				}
			} catch (error) {
				console.log("Error in home page submitCreateNoteForm method -->", error);

			}
		}
	},
})
</script>

<style lang="css" scoped>
.main {
	width: 100%;
	height: 100vh;
	background-color: #424b7a;
}

.container {
	max-width: 1170px;
	margin: 0 auto;
}

.main-header {
	display: flex;
	align-items: center;
	padding: 15px 0 0 0;
}

.main-header-left {
	width: 50%;
	padding: 0 15px;
}

.main-header-left__title {
	cursor: pointer;
	margin: 2px 0 10px;
	font-size: 36px;
	color: #fff;
}

.main-header-right {
	width: 50%;
}

.main-header-right__title {
	padding: 33px 0;
	font-style: italic;
	font-weight: normal;
	font-size: 14px;
	color: #fff;
}

.main-content {
	padding: 5px 0 50px;
	background-color: #fff;
}

.main-content-info {
	display: flex;
	padding: 0 15px;
}

.main-content-info-left {
	width: 50%;
}

.main-content-info-left__title {
	margin: 20px 0 10px;
	font-size: 24px;
}

.main-content-info-left__information {
	margin: 0 0 5px;
	padding: 0 10px 0 0;
	font-size: 14px;
}

.main-content-info-left__information>a {
	color: #428bca;
	text-decoration: none;
}

.main-content-info-left__information>a:hover {
	color: #428bca;
	text-decoration: underline;
}

.main-content-info-right {
	width: 50%;
}

.main-content-info-right-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.main-content-info-right-top__title {
	margin: 20px 0 10px;
	font-size: 24px;
}

.main-content-info-right {
	padding: 0 15px;
}

.main-content-info-right-top__step {
	padding: 15px 15px 0 0;
}

.main-content-info-right-top__step_link {
	color: #9f9f9f;
	font-size: 14px;
	text-decoration: none;
}

.main-content-info-right-top__step_active {
	color: #000;
}

.main-content-info-right-top__step>a:not(:first-child) {
	margin-left: 8px;
}

.main-content-info-right-bottom__img>span {
	float: left;
	height: 100px;
	width: 75px;
	background: transparent url('@/static/assets/img/slideshow_images.png');
}

.main-content-info-right-bottom__img_two>span {
	float: left;
	height: 100px;
	width: 85px;
	background: transparent url('@/static/assets/img/slideshow_images.png') -80px 0;
}

.main-content-info-right-bottom__img_three>span {
	float: left;
	height: 100px;
	width: 85px;
	background: transparent url('@/static/assets/img/slideshow_images.png') -169px 0;
}

.main-content-info-right-bottom {
	display: flex;
	align-items: center;
}

.main-content-info-right-bottom__info {
	font-size: 14px;
	color: #333333;
}

.main-content-form__input {
	padding: 0 15px;
}

.main-content-form__input_textarea {
	width: 100%;
	height: 290px;
	margin: 10px 0;
	background-color: #f8f8f8;
	border: none;
	padding: 10px;
	color: #333333;
	font-size: 13px;
}

.main-content-form__btn {
	display: flex;
	justify-content: flex-end;
	padding: 0 15px;
}

.main-content-form__btn>button {
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 750px;
	height: 46.94px;
	color: #fff;
	background-color: #5cb85c;
	border-color: #4cae4c;
	border: none;
	padding: 10px 16px;
	font-size: 18px;
	line-height: 1.33;
	border-radius: 6px;
}

.main-content-form__btn>button>img {
	margin-right: 2px;
}

.main-content-form__btn>button:hover {
	color: #fff;
	background-color: #47a447;
	border-color: #398439;
}

.main-content-form__info {
	display: flex;
	justify-content: flex-end;
	margin: 10px 0 10px;
	padding: 0 15px;
	font-size: 14px;
	color: #333333;
}

.main-content-form__info>a {
	margin: 0 4px;
	color: #428bca;
	text-decoration: none;
}

.main-content-form__info>a:hover {
	text-decoration: underline;
}

.main-content-loading {
	display: flex;
	justify-content: center;
	height: 394.94px;
	padding: 100px 15px 0 15px;
}

.main-content-readylink {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 15px;
	height: 401.94px;
	padding: 100px 0 0;
}

.main-content-readylink__link {
	width: 556.44px;
}

.main-content-readylink__link>span {
	width: 82.86px;
	height: 34px;
	color: #555555;
	background-color: #eeeeee;
	padding: 8px 12px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
	line-height: 1;
}

.main-content-readylink__link>input {
	width: 472.14px;
	height: 34px;
	padding: 6px 12px;
	font-size: 14px;
	line-height: 1.428571429;
	color: #555;
	background-color: #fff;
	background-image: none;
	border: 1px solid #ccc;
	border-radius: 4px;
	border-bottom-left-radius: 0;
	border-top-left-radius: 0;
	margin-left: -4px;
	border-left: none;
	-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
	box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}

.main-content-readylink__link>input:focus {
	border-color: #66afe9;
	outline: 0;
	-webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
	box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
}

.main-content-readylink__btn {
	display: flex;
	align-items: center;
	margin: 10px 0;
}

.main-content-readylink__btn_copy>button {
	height: 34px;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	background-image: none;
	border: 1px solid transparent;
	white-space: nowrap;
	padding: 6px 12px;
	font-size: 14px;
	line-height: 1.428571429;
	border-radius: 4px;
	color: #fff;
	background-color: #f0ad4e;
}

.main-content-readylink__btn_copy>button:hover {
	color: #fff;
	background-color: #ed9c28;
	border-color: #d58512;
}

.main-content-readylink__btn {
	display: flex;
	justify-content: flex-end;
	width: 556.44px;
}

.main-content-readylink__btn_generate>button {
	margin-left: 4px;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	background-image: none;
	border: 1px solid transparent;
	white-space: nowrap;
	padding: 6px 12px;
	font-size: 14px;
	line-height: 1.428571429;
	border-radius: 4px;
}

.main-content-readylink__info {
	display: flex;
	justify-content: flex-end;
	width: 556.44px;
	margin: 0 0 10px;
	font-size: 14px;
}

.main-content-readylink__info>img {
	width: 16px;
	height: 16px;
}

.main-content-readylink__info>div {
	margin-left: 3px;
}

.main-footer {
	padding: 15px 0 0;
	background-color: #424b7a;
}

.main-footer-content {
	display: flex;
}

.main-footer-content__left {
	padding: 0 15px;
	width: 350px;
}

.main-footer-content__left_link {
	font-size: 14px;
	color: #fff;
	text-decoration: none;
}

.main-footer-content__left_link:hover {
	color: #fff;
}

.main-footer-content__right {
	display: flex;
	justify-content: center;
	width: 350px;
	margin: 0 0 10px;
	font-size: 14px;
	color: #fff;
}

@media (max-width: 1194px) {
	.container {
		max-width: 970px;
	}
}

@media (max-width: 1024px) {
	.container {
		max-width: 970px;
	}
}

@media (max-width: 926px) {
	.container {
		max-width: 750px;
	}
}

@media (max-width: 896px) {
	.main-header {
		flex-wrap: wrap;
		padding: 15px 0 10px 0;
	}

	.main-header-left {
		width: 100%;
	}

	.main-header-right {
		width: 100%;
	}

	.main-header-right__title {
		margin: 0 15px;
		padding: 0;
	}

	.main-content-info {
		flex-wrap: wrap;
	}

	.main-content-info-left {
		width: 100%;
	}

	.main-content-info-right {
		width: 100%;
	}
}

@media (max-width: 844px) {
	.main-header {
		flex-wrap: wrap;
		padding: 15px 0 10px 0;
	}

	.main-header-left {
		width: 100%;
	}

	.main-header-right {
		width: 100%;
	}

	.main-header-right__title {
		margin: 0 15px;
		padding: 0;
	}

	.main-content-info {
		flex-wrap: wrap;
	}

	.main-content-info-left {
		width: 100%;
	}

	.main-content-info-right {
		width: 100%;
	}
}

@media (max-width: 834px) {
	.container {
		max-width: 750px;
	}

	.main-header-left__title {
		margin: 0;
	}

	.main-header {
		flex-wrap: wrap;
		padding: 15px 0 10px 0;
	}

	.main-header-left {
		width: 100%;
	}

	.main-header-right {
		width: 100%;
	}

	.main-header-right__title {
		margin: 0 15px;
		padding: 0;
	}

	.main-content-info-left__title {
		font-size: 20px;
	}

	.main-content-info-right-bottom__info {
		font-size: 12px;
	}

	.main-content-info-left__information {
		font-size: 13px;
	}

	.main-content-info-right-top__title {
		font-size: 20px;
	}

	.main-content-form__info {
		font-size: 13px;
	}

	.main-footer-content__left_link {
		font-size: 13px;
	}

	.main-footer-content__right {
		font-size: 13px;
	}
}

@media (max-width: 480px) {
	.main-content-readylink__link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.main-content-readylink__link>span {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
	}

	.main-content-readylink__link>input {
		width: 70%;
		font-size: 12px;
	}

	.main-content-readylink__btn {
		width: 90%;
	}

	.main-content-readylink__btn_copy>button {
		font-size: 12px;
	}

	.main-content-readylink__btn_generate>button {
		font-size: 12px;
	}

	.main-content-readylink__info {
		width: 90%;
		font-size: 12px;
	}
}

@media (max-width: 428px) {
	.main-content-info {
		flex-wrap: wrap;
	}

	.main-content-info-left {
		width: 100%;
	}

	.main-content-info-right {
		width: 100%;
	}

	.main-content-form__info {
		text-align: end;
		font-size: 11px;
	}
}

@media (max-width: 390px) {
	.main-header-left__title {
		font-size: 30px;
	}

	.main-header-right__title {
		font-size: 11px;
	}

	.main-content-info-left__information {
		font-size: 12px;
	}

	.main-content-info-right-top__title {
		font-size: 18px;
	}

	.main-content-form__info {
		font-size: 10px;
	}

	.main-content-info-right-bottom__info {
		font-size: 11px;
	}

	.main-content-form__input_textarea {
		font-size: 12px;
	}

	.main-content-form__btn>button {
		font-size: 15px;
	}

	.main-content-info-right-top__step_link {
		font-size: 12px;
	}

	.main-footer-content__left_link {
		font-size: 11px;
	}

	.main-footer-content__right {
		font-size: 11px;
	}
}

@media (max-width: 320px) {
	.main-header-left__title {
		font-size: 25px;
	}

	.main-content-info-right-top__title {
		font-size: 12px;
	}

	.main-header-right__title {
		font-size: 10px;
	}

	.main-content-info-left__information {
		font-size: 11px;
	}

	.main-content-info-right-top__step {
		padding: 8px 15px 0 0;
	}

	.main-content-form__input_textarea {
		font-size: 11px;
	}

	.main-content-info-right-bottom__info {
		font-size: 10px;
	}

	.main-content-form__btn>button {
		font-size: 13px;
	}

	.main-content-form__info {
		font-size: 7px;
	}

	.main-footer-content__left_link {
		font-size: 9px;
	}

	.main-footer-content__right {
		font-size: 9px;
	}
}
</style>