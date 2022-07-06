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
				<div class="main-content-about">
					<div class="main-content-about__title">About 1ty.me</div>
					<div class="main-content-about__textone">
						1ty.me was created by the team at ApogeeInvent out of necessity. Every day we have to
						give or receive sensitive data. Normally this is a big ordeal as sending such valuable
						information over email is insecure. So we would split up our data, sending half by
						email and the other half by IM or phone. This was very time consuming for us so we
						decided to create 1ty.me, a simple short URL service for viewing self destructing
						notes.
					</div>
					<div class="main-content-about__texttwo">
						1ty.me is a simple idea, destroying a note after reading it. This method has been used
						in countless spy movies (and one of our favorite cartoons: Inspector Gadget). But we
						decided to take it one step further by utilizing encryption and SSL technologies found
						in many of our projects. The notes you give 1ty.me are are so secure even we can not
						read them! Now our lives (and our clients) are just a little bit better.
					</div>
					<div class="main-content-about__textthree">
						For more information on how 1ty.me works visit <NuxtLink to="/faq">FAQ</NuxtLink> page. Don't forget
						to visit our <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink> page to see that we take your
						privacy
						seriously!
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
								href="https://www.apogeeinvent.com/?ai_sid=370952&ai_sid_key=tjh6gz9vk9">ApogeeInvent</a>
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

import { IHead } from "@/types/pages/about/index";

export default Vue.extend({
	name: "about-page",
	head(): IHead {
		return {
			title: `${process.env.BASE_URL} - About - One Time Self Destructing Links For Sharing Sensitive Information`,
			meta: [
				{ hid: "description", name: "description", content: "Information about one-time self-destructing notes for the exchange of confidential information." },
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
	min-height: 620px;
}

.main-content-about {
	padding: 0 15px;
}

.main-content-about__title {
	margin: 20px 0 10px;
	font-size: 30px;
}

.main-content-about__textone {
	margin: 0 0 10px;
	font-size: 14px;
}

.main-content-about__texttwo {
	margin: 0 0 10px;
	font-size: 14px;
}

.main-content-about__textthree {
	margin: 0 0 10px;
	font-size: 14px;
}

.main-content-about__textthree>a {
	color: #428bca;
	text-decoration: none;
}

.main-content-about__textthree>a:hover {
	color: #2a6496;
	text-decoration: underline;
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

@media (max-width: 1080px) {
	.main-content-about__title {
		font-size: 24px;
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

	.main-content {
		min-height: 420px;
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

	.main-content-about__title {
		margin: 20px 0 10px;
		font-size: 20px;
	}

	.main-content-about__textone {
		font-size: 13px;
	}

	.main-content-about__texttwo {
		font-size: 13px;
	}

	.main-content-about__textthree {
		font-size: 13px;
	}

	.main-footer-content__left_link {
		font-size: 13px;
	}

	.main-footer-content__right {
		font-size: 13px;
	}
}

@media (max-width: 780px) {
	.main-content {
		min-height: 420px;
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

	.main-content-about__textone {
		font-size: 12px;
	}

	.main-content-about__texttwo {
		font-size: 12px;
	}

	.main-content-about__textthree {
		font-size: 12px;
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

	.main-content-about__textone {
		font-size: 11px;
	}

	.main-content-about__texttwo {
		font-size: 11px;
	}

	.main-content-about__textthree {
		font-size: 11px;
	}
}
</style>