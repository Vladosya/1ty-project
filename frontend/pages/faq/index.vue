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
		<div class="main-content">
			<div class="container">
				<div class="main-content-faq">
					<div class="main-content-faq__title">Frequency Asked Questions</div>
					<div class="main-content-faq__header">How secure is 1ty.me?</div>
					<div class="main-content-faq__text">
						1ty.me runs only in HTTPS. Meaning any data transferred to or from the server is
						encrypted. All notes are encrypted before being stored on the server and only a
						portion of the key to decrypt is contained in the URL. This URL is not stored on the
						server, so only the link can decrypt the notes. Once the notes are viewed the
						encrypted notes are removed from the system. Pretty secure.
					</div>
					<div class="main-content-faq__header">How are the notes stored before being read?</div>
					<div class="main-content-faq__text">
						The notes are encrypted and put into a database. The URL is hashed so you can not link
						a URL to a note directly.
					</div>
					<div class="main-content-faq__header">
						Can I retrieve a note after it has been read?
					</div>
					<div class="main-content-faq__text">
						No. It is removed from the system after being displayed once.
					</div>
					<div class="main-content-faq__header">Can you read the notes?</div>
					<div class="main-content-faq__text">
						No. The notes are encrypted using a key that is never stored on the server. Only the
						valid URL can display the notes. Once the notes are viewed the encrypted notes are
						removed from the system and the link can not be viewed again.
					</div>
					<div class="main-content-faq__header">How do I know the note has been read?</div>
					<div class="main-content-faq__text">
						You may choose to enter your email address when creating a note to receive a email
						notifying you the note has been read. You may also enter a reference to keep track of
						the note if sending multiple URL's. The email address is encrypted in the same fashion
						as notes and deleted upon the note being viewed.
					</div>
					<div class="main-content-faq__header">
						But this is what public/private key (asymmetric) cryptography is for? Why not use PGP?
					</div>
					<div class="main-content-faq__text">
						We agree. If you and your recipient can use asymmetric cryptography (like PGP) then go
						for it. But our clients do not want to deal with that! They do not see the problem of
						sending passwords over regular email. This is easy enough for anyone to use without
						the knowledge of asymmetric cryptography.
					</div>
				</div>
			</div>
		</div>
		<div class="main-footer">
			<div class="container">
				<div class="main-footer-content">
					<div class="main-footer-content__left">
						<div>
							<NuxtLink to="/" class="main-footer-content__left_link">Home</NuxtLink>
						</div>
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
								href="https://www.apogeeinvent.com/?ai_sid=370954&ai_sid_key=avcv2al2o4">ApogeeInvent</a>
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

import { IHead } from "@/types/pages/faq/index";

export default Vue.extend({
	name: "faq-page",
	head(): IHead {
		return {
			title: `${process.env.BASE_URL} - FAQ - One Time Self Destructing Links For Sharing Sensitive Information`,
			meta: [
				{ hid: "description", name: "description", content: "Frequency Asked Questions for 1ty.me. A site to create secure one time self destructing notes to send sensitive information with simple short urls." },
			],
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

.main-content-faq {
	padding: 0 15px;
}

.main-content-faq__title {
	margin: 20px 0 10px;
	font-size: 30px;
}

.main-content-faq__header {
	margin: 20px 0 10px;
	font-size: 24px;
}

.main-content-faq__text {
	font-size: 14px;
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

	.main-footer-content__left_link {
		font-size: 13px;
	}

	.main-footer-content__right {
		font-size: 13px;
	}
}

@media (max-width: 390px) {
	.main-header-left__title {
		font-size: 30px;
	}

	.main-header-right__title {
		font-size: 11px;
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

	.main-header-right__title {
		font-size: 10px;
	}

	.main-footer-content__left_link {
		font-size: 9px;
	}

	.main-footer-content__right {
		font-size: 9px;
	}
}
</style>