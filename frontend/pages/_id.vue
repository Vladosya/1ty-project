<template>
	<div class="main">
		<div class="container">
			<div class="main-header">
				<div class="main-header-left">
					<div class="main-header-left__title" @click="$router.push('/')">1ty.me - "One Time"</div>
				</div>
				<div class="main-header-right">
					<div class="main-header-right__title">
						One Time Self Destructing Links For Sharing Sensitive Information
					</div>
				</div>
			</div>
		</div>
		<div class="main-note">
			<div class="container">
				<div class="main-prevdestr-block" :class="{ 'main-prevdestr-block_none': isMenuReadLink }">
					<div class="main-prevdestr-content" v-if="isBeforeReadLink">
						<div class="main-prevdestr-content__title">This message will self destruct!</div>
						<div class="main-prevdestr-content__info">
							Once viewed you can not view this note again. If you need access to this information
							again please copy it to a secure location.
						</div>
						<div class="main-prevdestr-content__btn">
							<button @click="readNote">View Note</button>
						</div>
					</div>
					<div class="main-prevdestr-content" v-if="isAfterReadLink">
						<div class="main-prevdestr-content__title">This note is not available</div>
						<div class="main-prevdestr-content__info">
							The note you are trying to view was already accessed on 2022-06-30 11:13am CDT
							(2022-06-30 4:13pm GMT) Notes may only be viewed once then they are destroyed.
						</div>
						<div class="main-prevdestr-content__btn_home">
							<button @click="$router.push('/')">Go To Homepage</button>
						</div>
					</div>
				</div>
				<div class="main-note-content" v-if="isMenuReadLink">
					<div class="main-note-content__left">
						<div class="main-note-content__left_top">
							<div class="main-note-content__left_top_title">Your Note</div>
							<div class="main-note-content__left_top_btn">
								<button @click="copyText">Copy Note to Clipboard</button>
							</div>
						</div>
						<div class="main-note-content__left_bottom">
							<div class="main-note-content__left_bottom_textarea">
								<textarea v-model.trim="inputLink"></textarea>
							</div>
						</div>
					</div>
					<div class="main-note-content__right">
						<div class="main-note-content__right_title">Remember</div>
						<ul class="main-note-content__right_info">
							<li>
								<b>You can not retrieve this note again.</b> This note has been removed and
								destroyed from the system.
							</li>
							<li>
								Copy the contents to a secure location on your computer before closing this page.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="main-footer">
			<div class="container">
				<div class="main-footer-content">
					<div class="main-footer-content__left">
						<div>
							<a class="main-footer-content__left_link" href="#">About 1ty.me</a>
						</div>
						<div>
							<a class="main-footer-content__left_link" href="#">Frequently Asked Questions</a>
						</div>
						<div>
							<a class="main-footer-content__left_link" href="#">Privacy Policy</a>
						</div>
						<div>
							<a class="main-footer-content__left_link" href="#">ApogeeInvent</a>
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

import { IHead, IData } from "@/types/pages/_id";

export default Vue.extend({
	name: "note-page",
	head(): IHead {
		return {
			title: "1ty.me - One Time Self Destructing Links For Sharing Sensitive Information",
			meta: [
				{ hid: "description", name: "description", content: "Create secure one time self destructing notes to send sensitive information with simple short urls." },
			],
		}
	},
	async created(): Promise<void> {
		const checkNoteById = await this.$store.dispatch("home/getNoteById", this.$route.params.id);

		if (checkNoteById.length > 0) {
			if (checkNoteById[0].is_readed === true) {
				this.isBeforeReadLink = false;
				this.isAfterReadLink = true;
			} else {
				this.currentNote = checkNoteById;
				this.inputLink = checkNoteById[0].note_message;
				this.isBeforeReadLink = true;
			}
		} else {
			this.$router.push("/");
		}
	},
	async beforeDestroy(): Promise<void> {
		await this.$store.dispatch("home/deleteNoteById", this.$route.params.id);
		this.isBeforeReadLink = false;
		this.isAfterReadLink = false;
		this.isMenuReadLink = false;
		this.currentNote = [];
		this.inputLink = "";
		this.isCopyLink = false;
	},
	data(): IData {
		return {
			isBeforeReadLink: false,
			isAfterReadLink: false,
			isMenuReadLink: false,
			currentNote: [],
			inputLink: "",
			isCopyLink: false,
		}
	},
	methods: {
		async readNote(): Promise<void> {
			await this.$store.dispatch("home/readNoteById", this.$route.params.id);
			this.isBeforeReadLink = false;
			this.isMenuReadLink = true;
		},
		copyText(): void {
			navigator.clipboard.writeText(this.inputLink);
			this.isCopyLink = true;
			this.$notify({
				title: "Success",
				message: "Note copied successfully",
				type: "success",
				position: "top-right",
			});
		},
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

.main-note {
	padding: 5px 0 50px;
	background-color: #fff;
}

.main-prevdestr-block {
	padding-top: 100px;
}

.main-prevdestr-block_none {
	padding-top: 0;
}

.main-prevdestr-content {
	padding: 0 15px;
	border-radius: 6px;
	margin: 0 0 30px;
	padding: 48px 60px;
	font-size: 14px;
	color: #333333;
	background-color: #eeeeee;
}

.main-prevdestr-content__title {
	margin: 20px 0 10px;
	font-size: 30px;
	color: #333333;
}

.main-prevdestr-content__info {
	margin: 0 0 15px;
	font-size: 20px;
	color: #333;
}

.main-prevdestr-content__btn {
	display: flex;
	justify-content: flex-end;
}

.main-prevdestr-content__btn>button {
	cursor: pointer;
	padding: 10px 16px;
	font-size: 18px;
	line-height: 1.33;
	border-radius: 6px;
	color: #fff;
	background-color: #5cb85c;
	border-color: #4cae4c;
	border: none;
}

.main-prevdestr-content__btn>button:hover {
	background-color: #47a447;
	border-color: #398439;
}

.main-prevdestr-content__btn_home>button {
	cursor: pointer;
	padding: 10px 16px;
	font-size: 18px;
	line-height: 1.33;
	border-radius: 6px;
	color: #fff;
	background-color: #428bca;
	border-color: #357ebd;
	border: none;
}

.main-prevdestr-content__btn_home>button:hover {
	background-color: #3276b1;
	border-color: #285e8e;
}

.main-note-content {
	display: flex;
	justify-content: space-between;
}

.main-note-content__left {
	padding: 0 15px;
	width: 66.6%;
}

.main-note-content__left_top {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.main-note-content__left_top_title {
	margin: 20px 0 10px;
	font-size: 21px;
}

.main-note-content__left_top_btn>button {
	cursor: pointer;
	margin: 10px 0 0;
	padding: 6px 12px;
	color: #fff;
	font-size: 14px;
	border-radius: 4px;
	background-color: #428bca;
	border-color: #357ebd;
	border: none;
}

.main-note-content__left_top_btn>button:hover {
	background-color: #3276b1;
	border-color: #285e8e;
}

.main-note-content__left_bottom_textarea>textarea {
	/* outline: none; */
	padding: 10px;
	width: 100%;
	min-height: 500px;
	font-size: 14px;
	background-color: #f8f8f8;
	color: #333;
	border: none;
}

.main-note-content__right {
	padding: 0 15px;
	width: 33.3%;
}

.main-note-content__right_title {
	margin: 20px 0 10px;
	font-size: 24px;
	color: #333;
}

.main-note-content__right_info {
	font-size: 14px;
	color: #333;
}

.main-note-content__right_info>li {
	font-size: 14px;
	color: #333;
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

	.main-note-content__left_top_title {
		font-size: 18px;
	}

	.main-note-content__left_top_btn>button {
		font-size: 12px;
	}

	.main-note-content__right_title {
		font-size: 20px;
	}

	.main-note-content__right_info>li {
		font-size: 12px;
	}

	.main-footer-content__left_link {
		font-size: 13px;
	}

	.main-footer-content__right {
		font-size: 13px;
	}
}

@media (max-width: 768px) {
	.main-note-content__left_bottom_textarea>textarea {
		min-height: 350px;
	}
}

@media (max-width: 667px) {
	.main-note-content {
		flex-direction: column;
		align-items: center;
	}

	.main-note-content__left {
		width: 100%;
	}

	.main-note-content__right {
		width: 100%;
	}

	.main-note-content__left_bottom_textarea>textarea {
		font-size: 13px;
	}
}

@media (max-width: 428px) {
	.main-prevdestr-content {
		padding: 30px 40px;
	}
}

@media (max-width: 390px) {
	.main-header-left__title {
		font-size: 30px;
	}

	.main-header-right__title {
		font-size: 11px;
	}

	.main-prevdestr-content__title {
		font-size: 28px;
	}

	.main-prevdestr-content__info {
		font-size: 18px;
	}

	.main-prevdestr-content__btn>button {
		font-size: 16px;
	}

	.main-prevdestr-content__btn_home>button {
		font-size: 16px;
	}

	.main-footer-content__left_link {
		font-size: 11px;
	}

	.main-footer-content__right {
		font-size: 11px;
	}
}

@media (max-width: 375px) {
	.main-note-content__left_bottom_textarea>textarea {
		font-size: 12px;
	}
}

@media (max-width: 360px) {
	.main-prevdestr-content__title {
		font-size: 26px;
	}

	.main-prevdestr-content__info {
		font-size: 16px;
	}
}

@media (max-width: 320px) {
	.main-header-left__title {
		font-size: 25px;
	}

	.main-header-right__title {
		font-size: 10px;
	}

	.main-prevdestr-content__title {
		font-size: 24px;
	}

	.main-prevdestr-content__info {
		font-size: 14px;
	}

	.main-prevdestr-content__btn_home>button {
		font-size: 14px;
	}

	.main-note-content__left_top_btn>button {
		font-size: 11px;
	}

	.main-note-content__left_bottom_textarea>textarea {
		font-size: 11px;
	}

	.main-note-content__right_info>li {
		font-size: 11px;
	}

	.main-footer-content__left_link {
		font-size: 9px;
	}

	.main-footer-content__right {
		font-size: 9px;
	}
}
</style>