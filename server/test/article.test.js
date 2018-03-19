const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp)
const expect = chai.expect;
const server = require('../bin/www')

describe('GET /articles',function(){
  it('memastikan artikel disimpan muncul dalam daftar',(done)=>{
    chai.request(server)
    .get('/articles')
    .end((err,res)=>{
      expect(res).to.have.status(200)
      expect(res.body.message).to.be.a('string').eql('success show articles')
      done()
    })
  })
})

describe('POST/ articles',function(){
  it('memastikan artikel berhasil disimpan',(done)=>{
    chai.request(server)
    .post('/articles')
    .send({'title':'How to make orange juice','content':'Making orange juice is easy, just bla..bla...blaa'})
    .end((err,res)=>{
      console.log("ini res body",res.body)
      expect(res).to.have.status(201)
      expect(res.body.message).to.be.a('string').eql('success adding article')
      expect(res.body).to.be.an('object')
      expect(res.body.newArticle.title).to.equals('How to make orange juice')
      done()
    })
  })
})

describe('DELETE /article/:id',function(){
  it('memastikan artikel berhasil dihapus',(done)=>{
    chai.request(server)
    .del(`/articles/5aaf5da7841c302b723833c2`)
    .end((err,res)=>{
      expect(res).to.have.status(200)
      expect(res.body.message).to.be.a('string').eql('success remove an article')
      done()
    })
  })
})

describe('PUT /article/:id',function(){
  it('memastikan artikel berhasil diupdate',(done)=>{
    chai.request(server)
    .put('/articles/5aaf6390a8955731c02afb3a')
    .send({'title':'how to make apple juice'})
    .end((err,res)=>{
      expect(res).to.have.status(200)
      expect(res.body.message).to.be.a('string').eql('update success')
      done()
    })
  })
})
