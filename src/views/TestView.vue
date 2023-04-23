<script>
import questions from '../assets/questions.js';

export default {
	data: function () {
		return {
			questions,
			answers: {},
			currentRoute: "1"
		};
	},
	created: function () {
	},
	computed: {
		currentQuestion: function () {
			return parseInt(this.$route.params.question) - 1;
		},
		paginationStart: function () {
			return Math.max(0, this.currentQuestion - 2);
		},
		paginationEnd: function () {
			return Math.min(this.paginationStart + 5, this.questions.length - 1);
		}
	},
	methods: {
		answer: function (s) {
			this.answers[this.currentQuestion] = s;
			if (this.currentQuestion == this.questions.length - 1) {
				this.$router.push({ name: "report" });
			} else {
				this.$router.push({ name: "test", params: { question: this.currentQuestion + 2 } });
			}
		}
	}

}
</script>

<template>
  <div class="jumbotron">
			<div class="progress">
				<div class="progress-bar" role="progressbar"
					:aria-valuenow="currentQuestion"
					aria-valuemin="1" :aria-valuemax="questions.length"
					style="min-width: 2em;"
					:style="{width: (currentQuestion / questions.length) * 100 + '%'}">
					{{Math.floor((currentQuestion / questions.length) * 100)}}%
				</div>
			</div>
			<h1 class="display-4">Question {{currentQuestion + 1}}</h1>
			<h2>
				{{questions[currentQuestion]}}
			</h2>
			<div class="btn-group">
				<button type="button" class="btn btn-success" @click="answer(true);">True</button>
				<button type="button" class="btn" @click="answer(null);">Unsure</button>
				<button type="button" class="btn btn-danger" @click="answer(false);">False</button>
			</div>
			<nav aria-label="Question navigation">
				<ul class="pagination pagination-lg flex justify-content-center">
					<li class="page-item" :class="{disabled: currentQuestion <= 0}">
						<router-link class="page-link" :to="'/test/' + currentQuestion" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</router-link>
					</li>
					<li v-for="n in paginationEnd - paginationStart" class="page-item" :class="{active: n + paginationStart == currentQuestion + 1}">
						<router-link class="page-link" :to="'/test/' + (n + paginationStart)">{{n + paginationStart}}</router-link>
					</li>
					<li class="page-item" :class="{disabled: currentQuestion == questions.length - 1}">
						<router-link class="page-link" :to="'/test/' + (currentQuestion + 2)" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
</template>
