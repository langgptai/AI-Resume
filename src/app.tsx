'use client';

import React from 'react';
import { Phone, Mail, MapPin, Briefcase, GraduationCap, Award, Star, User } from 'lucide-react';

const A4Resume = () => {
  const resumeData = {
    name: "云中江树",
    title: "提示词工程师",
    contact: {
      email: "contact@langgpt.ai",
      wechat: "1796060717"
    },
    summary: "富有创新精神和丰富经验的提示词工程师，专注于优化AI模型输出和用户体验。在自然语言处理、对话系统和跨领域应用方面拥有深厚的专业知识。善于设计高效提示策略，推动AI应用从概念到成功落地的全过程。",
    experience: [
      {
        title: "高级提示词工程师",
        company: "ABC AI科技有限公司",
        period: "2021年6月 - 至今",
        responsibilities: [
          "领导开发创新的对话系统，提升用户体验和交互效率",
          "优化大规模语言模型的提示策略，性能提升40%",
          "设计跨领域AI应用的提示框架，加速产品开发周期"
        ]
      },
      {
        title: "NLP工程师",
        company: "XYZ数据科技公司",
        period: "2019年3月 - 2021年5月",
        responsibilities: [
          "负责公司核心NLP产品的算法优化和应用",
          "通过提示工程技术，提升模型准确率35%",
          "参与设计公司的提示词库，提高了AI应用开发效率"
        ]
      },
      {
        title: "AI研究助理",
        company: "DEF大学AI实验室",
        period: "2017年9月 - 2019年2月",
        responsibilities: [
          "参与多个自然语言处理研究项目",
          "协助开发新型对话生成模型",
          "负责数据收集和标注，提升模型训练质量"
        ]
      }
    ],
    education: [
      {
        degree: "人工智能硕士",
        school: "上海交通大学",
        period: "2015年9月 - 2017年6月"
      },
      {
        degree: "计算机科学学士",
        school: "浙江大学",
        period: "2011年9月 - 2015年6月"
      }
    ],
    skills: [
      { name: "提示词工程", level: 5 },
      { name: "自然语言处理", level: 5 },
      { name: "机器学习/深度学习", level: 4 },
      { name: "Python/PyTorch", level: 4 },
      { name: "大规模语言模型", level: 4 },
      { name: "对话系统设计", level: 3 },
      { name: "跨领域AI应用", level: 3 }
    ],
    achievements: [
      "开发的提示词框架在2023年全球AI挑战赛中获得金奖 🏆",
      "发表5篇高影响力论文，总引用超过500次 📚",
      "个人技术博客月访问量超过5万 📊",
      "主导的开源NLP工具包在GitHub上获得超过2000 stars ⭐"
    ]
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
      backgroundColor: '#f0f4f8',
    },
    page: {
      width: '595px',
      height: '842px',
      backgroundColor: '#ffffff',
      fontFamily: "'Noto Sans SC', sans-serif",
      fontSize: '12px',
      lineHeight: '1.5',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    leftColumn: {
      width: '220px',
      backgroundColor: '#e6e6fa',
      padding: '20px',
      borderTopLeftRadius: '20px',
      borderBottomLeftRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    rightColumn: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#f8f8ff',
      borderTopRightRadius: '20px',
      borderBottomRightRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      backgroundColor: '#8a7ab3',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      overflow: 'hidden',
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      margin: '0 auto 10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
    avatarImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    name: {
      fontSize: '22px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '5px',
      color: '#ffffff',
    },
    title: {
      fontSize: '14px',
      textAlign: 'center',
      marginBottom: '10px',
      color: '#ffffff',
    },
    contactInfo: {
      fontSize: '11px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5px',
      color: '#ffffff',
    },
    icon: {
      marginRight: '5px',
      flexShrink: 0,
    },
    section: {
      marginBottom: '20px',
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      flex: 1,
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#8a7ab3',
      marginBottom: '10px',
      paddingBottom: '5px',
      borderBottom: '2px solid #b39ddb',
      display: 'flex',
      alignItems: 'center',
    },
    experienceItem: {
      marginBottom: '15px',
    },
    companyName: {
      fontWeight: 'bold',
      fontSize: '13px',
      color: '#8a7ab3',
    },
    period: {
      fontSize: '11px',
      color: '#999999',
      marginBottom: '5px',
    },
    responsibility: {
      fontSize: '11px',
      marginBottom: '3px',
      color: '#333333',
      paddingLeft: '10px',
      position: 'relative',
    },
    bullet: {
      position: 'absolute',
      left: '0',
      top: '6px',
      width: '4px',
      height: '4px',
      backgroundColor: '#8a7ab3',
      borderRadius: '50%',
    },
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5px',
    },
    skillName: {
      flex: 1,
      fontSize: '11px',
      color: '#333333',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    skillLevel: {
      display: 'flex',
      marginLeft: '5px',
    },
    star: {
      color: '#ffd700',
      marginLeft: '2px',
    },
    achievementItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '5px',
      fontSize: '11px',
      color: '#333333',
    },
    emoji: {
      fontSize: '14px',
      marginRight: '5px',
      flexShrink: 0,
    },
    summary: {
      fontSize: '11px',
      color: '#333333',
    },
  };

  const SkillLevel = ({ level }) => (
    <div style={styles.skillLevel}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          style={{
            ...styles.star,
            fill: star <= level ? '#ffd700' : 'transparent',
          }}
        />
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.page}>
        <div style={styles.leftColumn}>
          <div style={styles.header}>
            <div style={styles.avatar}>
              <img 
                src="https://avatars.githubusercontent.com/u/46625232" 
                alt="GitHub Avatar" 
                style={styles.avatarImg}
              />
            </div>
            <h1 style={styles.name}>{resumeData.name}</h1>
            <p style={styles.title}>{resumeData.title}</p>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <Mail size={12} style={styles.icon} />
                <span style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{resumeData.contact.email}</span>
              </div>
              <div style={styles.contactItem}>
                <User size={12} style={styles.icon} />
                <span>{resumeData.contact.wechat}</span>
              </div>
            </div>
          </div>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <Star size={16} style={{...styles.icon, marginRight: '5px'}} />
              技能专长
            </h2>
            {resumeData.skills.map((skill, index) => (
              <div key={index} style={styles.skillItem}>
                <span style={styles.skillName}>
                  {skill.name}
                </span>
                <SkillLevel level={skill.level} />
              </div>
            ))}
          </div>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <Award size={16} style={{...styles.icon, marginRight: '5px'}} />
              成就与奖项
            </h2>
            {resumeData.achievements.map((achievement, index) => (
              <div key={index} style={styles.achievementItem}>
                <span style={styles.emoji}>{achievement.slice(-2)}</span>
                <span>{achievement.slice(0, -2)}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.rightColumn}>
          <div style={{...styles.section, ...styles.summary}}>
            <h2 style={styles.sectionTitle}>
              <Briefcase size={16} style={{...styles.icon, marginRight: '5px'}} />
              个人简介
            </h2>
            <p>{resumeData.summary}</p>
          </div>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <GraduationCap size={16} style={{...styles.icon, marginRight: '5px'}} />
              教育背景
            </h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} style={{marginBottom: '10px'}}>
                <h3 style={styles.companyName}>{edu.degree} - {edu.school}</h3>
                <p style={styles.period}>{edu.period}</p>
              </div>
            ))}
          </div>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              <Briefcase size={16} style={{...styles.icon, marginRight: '5px'}} />
              工作经历
            </h2>
            {resumeData.experience.map((job, index) => (
              <div key={index} style={styles.experienceItem}>
                <h3 style={styles.companyName}>{job.title} - {job.company}</h3>
                <p style={styles.period}>{job.period}</p>
                <ul style={{ paddingLeft: '0', margin: '5px 0', listStyle: 'none' }}>
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} style={styles.responsibility}>
                      <span style={styles.bullet}></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default A4Resume;